import { useEffect, useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

interface UseAboutResult {
  isMobile: boolean;
  sectionRef: React.RefObject<HTMLDivElement | null>;
  showTitle: boolean;
  showContainers: boolean[];
}

export function useAbout(): UseAboutResult {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [showTitle, setShowTitle] = useState(false);
  const [showContainers, setShowContainers] = useState([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const ANIMATION = {
      TITLE_DELAY: 150,
      CONTAINER_DELAYS: [400, 650, 900, 1150],
      INTERSECTION_THRESHOLD: 0.3,
    };

    try {
      if (!isMobile) return;

      const element = sectionRef.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          try {
            if (entry.isIntersecting) {
              setTimeout(() => setShowTitle(true), ANIMATION.TITLE_DELAY);

              ANIMATION.CONTAINER_DELAYS.forEach((delay, index) => {
                setTimeout(() => {
                  setShowContainers((prev) => {
                    const updated = [...prev];
                    updated[index] = true;

                    return updated;
                  });
                }, delay);
              });

              observer.disconnect();
            }
          } catch {
            throw new Error(t("about.error"));
          }
        },
        { threshold: ANIMATION.INTERSECTION_THRESHOLD },
      );

      observer.observe(element);

      return () => observer.disconnect();
    } catch {
      throw new Error(t("about.error"));
    }
  }, [isMobile, t]);

  return {
    isMobile,
    sectionRef,
    showTitle,
    showContainers,
  };
}
