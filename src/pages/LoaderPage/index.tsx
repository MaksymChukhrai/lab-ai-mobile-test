import { useLocation } from "react-router-dom";
import { STEPS } from "constants/steps";
import { AnalysLayout } from "components/AnalysLayout";
import LoaderCard from "@/components/LoaderCard";

function LoaderPage() {
  const location = useLocation();

  const stepFromState = location.state?.loaderStep ?? 1;

  return (
    <AnalysLayout currentStep={STEPS[stepFromState]}>
      <LoaderCard />
    </AnalysLayout>
  );
}

export default LoaderPage;
