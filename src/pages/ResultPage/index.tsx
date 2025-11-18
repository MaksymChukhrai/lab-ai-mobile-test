import { CircularProgress } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import { AnalysLayout } from "components/AnalysLayout";
import { useResultPage } from "hooks/useResultPage";
import { STEPS } from "constants/steps";
import errorIcon from "locals/error2.svg";
import checkIcon from "locals/check3.svg";
import arrow from "locals/arrow.svg";
import {
  PageContainer,
  Header,
  Title,
  Subtitle,
  WarningBox,
  WarningText,
  SectionBox,
  SectionTitle,
  MarkerTable,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableCell,
  RecommendationText,
  CardTitle,
  CardContent,
  ButtonGroup,
  ActionButton,
  StatusDot,
  StatusBox,
  StatusText,
  RecommendationGrid,
  CardBox,
  CardImage,
  RecommendationBox,
  SectionSubtitle,
  AssessmentText,
  BackButton,
  FooterActions,
} from "./styles";

export const ResultPage = () => {
  const {
    analysisResult,
    handleDownloadPDF,
    handlePrintReport,
    handleStartNewAnalysis,
    handleBack,
  } = useResultPage();

  const { t } = useTranslation();

  if (!analysisResult) {
    return (
      <AnalysLayout currentStep={STEPS[3]}>
        <PageContainer>
          <CircularProgress />
        </PageContainer>
      </AnalysLayout>
    );
  }

  return (
    <AnalysLayout currentStep={STEPS[3]}>
      <PageContainer id="result-content">
        <Header>
          <Title>{t("result.title")}</Title>
          <Subtitle>{t("result.subtitle")}</Subtitle>

          <WarningBox>
            <img src={errorIcon} alt={t("icons.errorAlt")} />
            <WarningText>{t("result.warningText")}</WarningText>
          </WarningBox>
        </Header>

        <SectionBox>
          <StatusBox>
            <StatusText>
              <StatusDot status="normal" />
              {t("result.normal")}
            </StatusText>
            <StatusText>
              <StatusDot status="limit" />
              {t("result.limit")}
            </StatusText>
            <StatusText>
              <StatusDot status="abnormal" />
              {t("result.abnormal")}
            </StatusText>
          </StatusBox>
          <MarkerTable>
            <TableHeader>
              <TableHeaderCell>{t("result.markerLabel")}</TableHeaderCell>
              <TableHeaderCell>{t("result.valueLabel")}</TableHeaderCell>
              <TableHeaderCell>{t("result.normalLabel")}</TableHeaderCell>
              <TableHeaderCell>{t("result.recomendLabel")}</TableHeaderCell>
            </TableHeader>
            {analysisResult.markers.map((marker, index) => (
              <TableRow key={index} status={marker.indicator}>
                <TableCell>
                  <StatusDot status={marker.indicator} />
                  {marker.name}
                </TableCell>
                <TableCell>
                  {marker.value} {marker.unit}
                </TableCell>
                <TableCell>{marker.normalRange}</TableCell>
                <TableCell>{marker.recommendation}</TableCell>
              </TableRow>
            ))}
          </MarkerTable>
        </SectionBox>

        {analysisResult.userCommentResponse && (
          <SectionBox $variant="question">
            <SectionTitle $variant="question">
              {t("result.answerToQuestion")}
            </SectionTitle>
            <RecommendationText>
              {analysisResult.userCommentResponse}
            </RecommendationText>
          </SectionBox>
        )}

        {analysisResult.recommendations.map((rec, index) => (
          <SectionBox key={index} $variant="recommendations">
            <SectionTitle $variant="question">
              {rec.name} recommendation
            </SectionTitle>
            <SectionSubtitle>{t("result.recommendDisclaimer")}</SectionSubtitle>
            <RecommendationGrid>
              {rec.items.map((item, index) => (
                <RecommendationBox key={index}>
                  <CardImage src={checkIcon} alt={t("result.markerLabel")} />
                  <CardBox>
                    <CardTitle>{item.name}</CardTitle>
                    <CardContent>{item.recommendations}</CardContent>
                  </CardBox>
                </RecommendationBox>
              ))}
            </RecommendationGrid>
          </SectionBox>
        ))}

        <SectionBox $variant="medicalAssessment">
          <SectionTitle $variant="medicalAssessment">
            {t("result.medicalAssessment")}
          </SectionTitle>

          <AssessmentText>
            <Trans i18nKey="result.overallHealthTitle" />
            {analysisResult.finalAssessment.overallHealthStatus}
          </AssessmentText>

          <AssessmentText>
            <Trans i18nKey="result.overallHealthTitle" />
            {analysisResult.finalAssessment.recommendationSummary}
          </AssessmentText>
        </SectionBox>

        <WarningBox $position="footer">
          <img src={errorIcon} alt={t("icons.errorAlt")} />
          <WarningText>{t("result.disclaimer")}</WarningText>
        </WarningBox>

        <FooterActions>
          <BackButton onClick={handleBack} aria-label="Back">
            <img src={arrow} alt="Back" />
          </BackButton>
          <ButtonGroup>
            <ActionButton onClick={handlePrintReport} $variant="print">
              {t("result.printResult")}
            </ActionButton>
            <ActionButton
              onClick={handleDownloadPDF}
              $variant="download"
              disableRipple
            >
              {t("result.downloadPDF")}
            </ActionButton>
            <ActionButton onClick={handleStartNewAnalysis} $variant="startNew">
              {t("result.startNew")}
            </ActionButton>
          </ButtonGroup>
        </FooterActions>
      </PageContainer>
    </AnalysLayout>
  );
};
