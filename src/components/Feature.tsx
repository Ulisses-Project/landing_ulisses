import { Card } from "@/components/ui/card";
import { CheckCircle2, X, type LucideIcon } from "lucide-react";
import { memo, useState, useEffect, useCallback } from "react";

// Discriminated union types para imagen o video
type MediaImage = {
  mediaType: "image";
  image: string;
  image_alt: string;
};

type MediaVideo = {
  mediaType: "video";
  video: string;
  video_poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
};

type MediaProps = MediaImage | MediaVideo;

interface BaseFeatureProps {
  badge: LucideIcon;
  badge_str: string;
  title: string;
  description: string;
  features: string[];
  isReversed?: boolean;
}

type FeatureProps = BaseFeatureProps & MediaProps;

// Componente de Lightbox para imágenes
const ImageLightbox = memo(
  ({
    isOpen,
    onClose,
    image,
    alt,
  }: {
    isOpen: boolean;
    onClose: () => void;
    image: string;
    alt: string;
  }) => {
    useEffect(() => {
      if (!isOpen) return;

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };

      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);

      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEscape);
      };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Vista previa de imagen"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          aria-label="Cerrar vista previa"
        >
          <X className="w-6 h-6" />
        </button>

        <div
          className="relative max-w-7xl max-h-[90vh] p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image}
            alt={alt}
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
          />
        </div>
      </div>
    );
  }
);

ImageLightbox.displayName = "ImageLightbox";

// Componente de media separado para mejor organización
const MediaContent = memo(({ mediaProps }: { mediaProps: MediaProps }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleImageClick = useCallback(() => {
    if (mediaProps.mediaType === "image") {
      setLightboxOpen(true);
    }
  }, [mediaProps.mediaType]);

  const handleCloseLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  return (
    <>
      {/* Contenedor con sombra sutil y profesional */}
      <div className="relative group">
        {/* Sombra difuminada sutil para diseño médico profesional */}
        <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-md opacity-30 group-hover:opacity-40 transition duration-300" />

        {/* Card principal con aspecto cuadrado y padding interno mínimo */}
        <Card className="relative overflow-hidden bg-card backdrop-blur-sm border border-primary/20 rounded-xl shadow-lg">
          {/* Padding externo muy reducido (2px) */}
          <div className="p-0.5">
            {/* Contenedor con aspect ratio cuadrado y fondo para imágenes */}
            <div className="aspect-square w-full bg-muted/30 rounded-lg overflow-hidden">
              {mediaProps.mediaType === "image" ? (
                <div
                  onClick={handleImageClick}
                  className="cursor-pointer w-full h-full relative group/image flex items-center justify-center"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleImageClick();
                    }
                  }}
                  aria-label={`Ver ${mediaProps.image_alt} en tamaño completo`}
                >
                  {/* Overlay muy sutil al hacer hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/5 transition-colors duration-300 z-10" />

                  {/* Padding interno reducido a 4px */}
                  <img
                    src={mediaProps.image}
                    alt={mediaProps.image_alt}
                    className="w-full h-full object-contain p-1"
                    loading="lazy"
                  />

                  {/* Indicador de zoom sutil */}
                  <div className="absolute bottom-2 right-2 z-20 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-foreground"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                      <line x1="11" x2="11" y1="8" y2="14" />
                      <line x1="8" x2="14" y1="11" y2="11" />
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center p-1">
                  <video
                    src={mediaProps.video}
                    poster={mediaProps.video_poster}
                    autoPlay={mediaProps.autoplay}
                    loop={mediaProps.loop}
                    muted={mediaProps.muted}
                    controls
                    controlsList="nodownload"
                    disablePictureInPicture
                    className="w-full h-full object-contain rounded"
                    playsInline
                    onContextMenu={(e) => e.preventDefault()}
                  >
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>

      {mediaProps.mediaType === "image" && (
        <ImageLightbox
          isOpen={lightboxOpen}
          onClose={handleCloseLightbox}
          image={mediaProps.image}
          alt={mediaProps.image_alt}
        />
      )}
    </>
  );
});

MediaContent.displayName = "MediaContent";

// Componente de contenido de texto separado
const TextContent = memo(
  ({
    badge,
    badge_str,
    title,
    description,
    features,
  }: Omit<BaseFeatureProps, "isReversed">) => {
    const BadgeIcon = badge;

    return (
      <div>
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
          <BadgeIcon className="w-4 h-4" />
          {badge_str}
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance text-foreground">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

TextContent.displayName = "TextContent";

export const Feature = memo((props: FeatureProps) => {
  const {
    badge,
    badge_str,
    title,
    description,
    features,
    isReversed = false,
    ...mediaProps
  } = props;

  const textContent = (
    <TextContent
      badge={badge}
      badge_str={badge_str}
      title={title}
      description={description}
      features={features}
    />
  );

  const mediaContent = (
    <div className="relative">
      <MediaContent mediaProps={mediaProps as MediaProps} />
    </div>
  );

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
      {/* En móvil: imagen primero (order-first), texto segundo (order-last) */}
      {/* En desktop (lg): respeta isReversed */}
      <div
        className={`order-first ${
          isReversed ? "lg:order-first" : "lg:order-last"
        }`}
      >
        {mediaContent}
      </div>
      <div
        className={`order-last ${
          isReversed ? "lg:order-last" : "lg:order-first"
        }`}
      >
        {textContent}
      </div>
    </div>
  );
});

Feature.displayName = "Feature";
