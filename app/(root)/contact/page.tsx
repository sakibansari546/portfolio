import { EmailButton } from "@/components/EmailButton";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Page() {
    return (
        <>
            {/* Contact Form Section */}
            <div className="relative min-h-[87vh] flex items-center justify-center">
                {/* Spotlight */}
                <Spotlight className="absolute -top-10 -left-10 md:-top-32 md:-left-20" fill="white" />

                {/* Button */}
                <EmailButton />
            </div>
        </>
    );
}
