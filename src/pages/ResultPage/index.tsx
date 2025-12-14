import { useCallback, useMemo, useState } from "react";
import {
  CircularProgress,
  useMediaQuery,
  useTheme,
  Collapse,
} from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Trans, useTranslation } from "react-i18next";
import { AnalysLayout } from "components/AnalysLayout";
import { useResultPage } from "hooks/useResultPage";
import { STEPS } from "constants/steps";
import errorIcon from "locals/error2.svg";
import checkIcon from "locals/check3.svg";
import arrow from "locals/arrow.svg";
import arrow1 from "locals/arrow1.svg";
import { AnalysisPdfDocument } from "./ResultPagePDF";
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
  MobileMarkersContainer,
  MobileMarkerCard,
  MobileMarkerHeader,
  MobileMarkerInfo,
  MobileMarkerValue,
  MobileMarkerDetails,
  MobileDetailBox,
  MobileLabel,
  MobileText,
  ToggleRecommendationsButton,
  MobileMarkerArrow,
  CollapseContainer,
} from "./styles";

export const ResultPage = () => {
  const {
    analysisResult,
    handlePrintReport,
    handleStartNewAnalysis,
    handleBack,
    pdfPageHeight,
    isPrinting,
  } = useResultPage();

  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [expandedMarker, setExpandedMarker] = useState<number | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleToggleMarker = (index: number) => {
    setExpandedMarker(expandedMarker === index ? null : index);
  };

  const handleToggleRecommendations = () => {
    setShowRecommendations(!showRecommendations);
  };

  const pdfDocument = useMemo(() => {
    if (!analysisResult) return null;

    return <AnalysisPdfDocument data={analysisResult} t={t} pageHeight={0} />;
  }, [analysisResult, t]);

  const onPrintClick = useCallback(() => {
    if (pdfDocument) {
      handlePrintReport(pdfDocument);
    }
  }, [pdfDocument, handlePrintReport]);

  if (!analysisResult) {
    return (
      <AnalysLayout currentStep={STEPS[3]}>
        <PageContainer>
          <CircularProgress />
        </PageContainer>
      </AnalysLayout>
    );
  }

  const shouldShowRecommendations = !isMobile || showRecommendations;

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

          {!isMobile ? (
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
          ) : (
            <MobileMarkersContainer>
              <TableHeader>
                <TableHeaderCell>{t("result.markerLabel")}</TableHeaderCell>
                <TableHeaderCell>{t("result.valueLabel")}</TableHeaderCell>
              </TableHeader>
              {analysisResult.markers.map((marker, index) => {
                const isExpanded = expandedMarker === index;

                return (
                  <MobileMarkerCard key={index} status={marker.indicator}>
                    <MobileMarkerHeader
                      onClick={() => handleToggleMarker(index)}
                    >
                      <MobileMarkerInfo>
                        <StatusDot status={marker.indicator} />
                        <MobileMarkerValue>{marker.name}</MobileMarkerValue>
                      </MobileMarkerInfo>

                      <MobileMarkerValue>
                        {marker.value} {marker.unit}
                        <MobileMarkerArrow
                          src={arrow1}
                          alt="toggle"
                          isExpanded={isExpanded}
                        />
                      </MobileMarkerValue>
                    </MobileMarkerHeader>

                    <Collapse in={isExpanded}>
                      <MobileMarkerDetails>
                        <MobileDetailBox>
                          <MobileLabel>{t("result.normalLabel")}</MobileLabel>
                          <MobileText>{marker.normalRange}</MobileText>

                          <MobileLabel>{t("result.recomendLabel")}</MobileLabel>
                          <MobileText>{marker.recommendation}</MobileText>
                        </MobileDetailBox>
                      </MobileMarkerDetails>
                    </Collapse>
                  </MobileMarkerCard>
                );
              })}
            </MobileMarkersContainer>
          )}
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

        {isMobile && !showRecommendations && (
          <ToggleRecommendationsButton onClick={handleToggleRecommendations}>
            {t("result.readRecommendations")}
          </ToggleRecommendationsButton>
        )}

        <Collapse
          in={shouldShowRecommendations}
          timeout={isMobile ? "auto" : 0}
        >
          <CollapseContainer>
            {analysisResult.recommendations.map((rec, index) => (
              <SectionBox key={index} $variant="recommendations">
                <SectionTitle $variant="question">
                  {rec.name} recommendation
                </SectionTitle>
                <SectionSubtitle>
                  {t("result.recommendDisclaimer")}
                </SectionSubtitle>
                <RecommendationGrid>
                  {rec.items.map((item, index) => (
                    <RecommendationBox key={index}>
                      <CardImage
                        src={checkIcon}
                        alt={t("result.markerLabel")}
                      />
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
                <Trans i18nKey="result.summaryTitle" />
                {analysisResult.finalAssessment.recommendationSummary}
              </AssessmentText>
            </SectionBox>

            {isMobile && (
              <ToggleRecommendationsButton
                onClick={handleToggleRecommendations}
              >
                {t("result.closeRecommendations")}
              </ToggleRecommendationsButton>
            )}
          </CollapseContainer>
        </Collapse>

        <WarningBox $position="footer">
          <img src={errorIcon} alt={t("icons.errorAlt")} />
          <WarningText>{t("result.disclaimer")}</WarningText>
        </WarningBox>

        <FooterActions>
          <BackButton onClick={handleBack} aria-label="Back">
            <img src={arrow} alt="Back" />
          </BackButton>
          <ButtonGroup>
            <ActionButton
              onClick={onPrintClick}
              $variant="print"
              disabled={isPrinting}
            >
              {t("result.printResult")}
            </ActionButton>
            <PDFDownloadLink
              document={
                <AnalysisPdfDocument
                  data={analysisResult}
                  t={t}
                  pageHeight={pdfPageHeight}
                />
              }
              fileName={"blood-test-analysis.pdf"}
              style={{ textDecoration: "none" }}
            >
              {({ loading }) => (
                <ActionButton
                  $variant="download"
                  disableRipple
                  disabled={loading}
                >
                  {loading ? "Generating..." : t("result.downloadPDF")}
                </ActionButton>
              )}
            </PDFDownloadLink>
            <ActionButton onClick={handleStartNewAnalysis} $variant="startNew">
              {t("result.startNew")}
            </ActionButton>
          </ButtonGroup>
        </FooterActions>
      </PageContainer>
    </AnalysLayout>
  );
};
