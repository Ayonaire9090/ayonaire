import { AppJoinBanner } from "../app-join-banner";

interface HomeActionBannerProps {
    image?: string;
    variant?: "primary" | "secondary";
}
export const HomeActionBanner = ({
    image = "/assets/icons/ayonaire-africa.svg",
    variant = "secondary",
}: HomeActionBannerProps) => {
  return (
    <section className="container section-spacing">
      <AppJoinBanner
        image={image}
        variant={variant}
      />
    </section>
  );
};
