# Class recording guide

This guide explains how to make a Google Meet recording available in an Ayonaire lesson. An administrator selects the recording and lesson; the LMS transfers the video to Bunny Stream and attaches it after processing.

## 1. One-time setup

These steps require access to Google Workspace, Google Cloud, Bunny Stream, and the LMS hosting settings. A technical administrator can follow the detailed configuration instructions in [backend/RECORDING_INTEGRATION.md](backend/RECORDING_INTEGRATION.md).

1. Enable the Google Drive API in a Google Cloud project.
2. Create a service account with domain-wide delegation. A Google Workspace administrator must authorize it to read Drive files using the `https://www.googleapis.com/auth/drive.readonly` scope. This permission is broad, so manage access to the service account carefully.
3. Add the Google Workspace email addresses of the meeting organizers to the integration's organizer allowlist. The LMS can only browse the configured organizers' Drives.
4. Create a Bunny Stream video library. Enable embedded view token authentication, configure the allowed LMS domains, and restrict direct access and exposure of original files as appropriate.
5. Add the Google service account, organizer list, Bunny library ID, Bunny Stream API key, and Bunny embed token security key to the backend hosting environment. Keep keys in the hosting provider's secret settings; do not put them in frontend code or commit them to the repository.
6. Deploy the updated backend and frontend. The backend must stay running for background publishing jobs to progress.
7. Test the complete workflow with a sample recording and an appropriate test lesson before using it for classes.

The detailed guide lists the exact environment variable names and additional security settings.

## 2. Record the class

1. Schedule and conduct the class in Google Meet as usual.
2. Record the meeting using an account with permission to record.
3. End the recording and wait for Google to finish creating the video. Meet saves the recording in the meeting organizer's Google Drive; it may not appear immediately.
4. Make sure the organizer is included in the LMS organizer allowlist. There is no need to download the video to a laptop or move it into a shared folder.

## 3. Publish the recording

1. Sign in to Ayonaire as an administrator.
2. Open **Workshops**, then select **Publish class recordings**.
3. Select the meeting organizer. The page lists MP4 videos accessible in that organizer's Drive.
4. Select the destination lesson using its course, module, and lesson name.
5. Find the correct recording. Check its name and date carefully: the list can contain other MP4 videos, and the LMS does not automatically match recordings to lessons.
6. Select **Publish recording**.
7. Check **Publishing activity** for progress. You can leave the page while the backend processes the job.

## 4. Check the result

Publishing activity uses these statuses:

| Status | Meaning |
| --- | --- |
| Queued | The recording is waiting for the background worker. |
| Uploading | The backend is transferring the recording from Google Drive to Bunny Stream. |
| Processing | Bunny is encoding the video. |
| Published | Processing finished and the recording was attached to the selected lesson. |
| Failed | The transfer or processing stopped; review the configuration and use **Retry**. |

After the status changes to **Published**, open the course and lesson as a student and check playback. The lesson must be published and unlocked for students to access it. If a lesson contains multiple videos, students can choose a recording in the lesson player.

## 5. If something goes wrong

- **No organizers appear:** Check that `GOOGLE_RECORDING_ORGANIZERS` is configured on the backend and the backend was restarted or redeployed.
- **A recording is missing:** Confirm that Google has finished creating the MP4, the correct organizer is selected, and the service account is authorized to access that organizer's Drive. Check subsequent pages in the list.
- **The recording cannot be published:** Check that a lesson is selected and the recording is downloadable. A recording that already has a publishing job cannot be submitted again.
- **A job fails:** Check the backend integration settings and logs, then select **Retry** in Publishing activity. Direct uploads are not resumable, so a failed transfer starts again from the beginning. An interrupted or failed upload can leave an unused video in Bunny; an administrator may need to review and remove it.
- **Published, but students cannot see the video:** Check that the correct lesson was selected and that the lesson is published and unlocked. If the lesson has multiple videos, check the recording selector.
- **The player reports an access error:** Check Bunny's allowed domains and embedded view token authentication settings, and confirm the backend uses the matching embed token security key. Refreshing the course requests a new signed player URL.

The integration requires real Google and Bunny configuration and an end-to-end test before it can be relied on in production.
