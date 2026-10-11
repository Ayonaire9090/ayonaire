import { SettingCard } from "../_components/setting-card";

export default async function AdminAuthenticationSettings() {
  return (
    <div className="flex flex-col gap-8 rounded-3xl bg-white p-4 lg:p-6">
      <h2 className="text-[18px] font-bold text-gray-900">Authentication</h2>

      {/* Two-Factor Authentication */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[16px] font-bold text-gray-900">
          Two-Factor Authentication
        </h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Enable 2FA"
            description=""
            type="toggle"
            category="authentication"
            settingKey="enable2fa"
            defaultChecked={true}
          />
        </div>
      </div>
      {/* Fraud Protection */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[16px] font-bold text-gray-900">
          Fraud Protection
        </h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Enable Fraud Protection"
            description=""
            type="toggle"
            category="authentication"
            settingKey="enableFraudProtection"
            defaultChecked={true}
          />
        </div>
      </div>
      {/* Login Sessions */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[16px] font-bold text-gray-900">
          Manage Active Login Sessions
        </h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Limit Active Login Sessions"
            description="Toggle to limit the number of active login sessions for a concurrent user login"
            type="toggle"
            category="authentication"
            settingKey="limitActiveLoginSessions"
            defaultChecked={true}
          />
        </div>
      </div>
      {/* Email Verifications */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[16px] font-bold text-gray-900">
          Email Verifications
        </h2>
        <div className="flex flex-col gap-3">
          <SettingCard
            title="Enable"
            description="Toggle to enable email verification for students and instructor signup"
            type="toggle"
            category="authentication"
            settingKey="enable"
            defaultChecked={true}
          />
        </div>
      </div>
    </div>
  );
}
