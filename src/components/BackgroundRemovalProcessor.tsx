import { useEffect, useState } from 'react';
import { removeBackground, loadImageFromSrc } from '@/utils/backgroundRemoval';
import notificationMockup from "@/assets/notification-mockup.png";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

interface ProcessedImages {
  notification: string | null;
  dashboard: string | null;
}

export const BackgroundRemovalProcessor = ({ onImagesProcessed }: { onImagesProcessed: (images: ProcessedImages) => void }) => {
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const processImages = async () => {
      if (processing) return;
      
      setProcessing(true);
      try {
        console.log('Processing notification image...');
        const notificationImg = await loadImageFromSrc(notificationMockup);
        const notificationBlob = await removeBackground(notificationImg);
        const notificationUrl = URL.createObjectURL(notificationBlob);

        console.log('Processing dashboard image...');
        const dashboardImg = await loadImageFromSrc(dashboardPreview);
        const dashboardBlob = await removeBackground(dashboardImg);
        const dashboardUrl = URL.createObjectURL(dashboardBlob);

        onImagesProcessed({
          notification: notificationUrl,
          dashboard: dashboardUrl
        });
      } catch (error) {
        console.error('Error processing images:', error);
        // Fallback to original images if processing fails
        onImagesProcessed({
          notification: null,
          dashboard: null
        });
      } finally {
        setProcessing(false);
      }
    };

    processImages();
  }, [onImagesProcessed, processing]);

  return null; // This is a utility component, no UI needed
};