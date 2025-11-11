import { CircularProgress, MenuItem } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import { STEPS } from "constants/steps";
import { GENDER_OPTIONS } from "constants/review";
import { AnalysLayout } from "components/AnalysLayout";
import { DatePicker } from "components/DatePicker";
import { useReviewPage } from "hooks/useReviewPage";
import arrow from "locals/arrow.svg";
import {
  ContentContainer,
  PageTitle,
  PageDescription,
  SectionTitle,
  PatientInfoBox,
  InputWrapper,
  InputLabel,
  StyledSelect,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  AddRowButton,
  CommentLabel,
  StyledTextarea,
  FooterActions,
  BackButton,
  GenerateButton,
  SectionInfoBox,
  MarkerPlaceholder,
} from "./styles";
import { MarkerRow } from "@/components/MarkerRow";

export const ReviewPage = () => {
  const { t } = useTranslation();
  const {
    markers,
    birthDate,
    gender,
    comment,
    isLoading,
    isError,
    isGenerating,
    handleMarkerNameChange,
    handleMarkerValueChange,
    handleAddMarker,
    handleRemoveMarker,
    handleCommentChange,
    handleBirthDateChange,
    handleGenderChange,
    handleBack,
    handleGenerateAnalysis,
  } = useReviewPage();

  if (isLoading) {
    return (
      <AnalysLayout currentStep={STEPS[2]}>
        <ContentContainer>
          <CircularProgress />
        </ContentContainer>
      </AnalysLayout>
    );
  }

  if (isError) {
    return (
      <AnalysLayout currentStep={STEPS[2]}>
        <ContentContainer>
          <PageTitle>{t("review.errorLoading")}</PageTitle>
          <PageDescription>{t("review.errorDescription")}</PageDescription>
        </ContentContainer>
      </AnalysLayout>
    );
  }

  return (
    <AnalysLayout currentStep={STEPS[2]}>
      <ContentContainer>
        <PageTitle>{t("review.title")}</PageTitle>
        <PageDescription>{t("review.description")}</PageDescription>

        <SectionInfoBox>
          <SectionTitle>{t("review.patientInfo")}</SectionTitle>
          <PatientInfoBox>
            <InputWrapper>
              <InputLabel>{t("review.birthDate")}</InputLabel>
              <DatePicker
                value={birthDate}
                onChange={handleBirthDateChange}
                placeholder={t("review.birthDatePlaceholder")}
              />
            </InputWrapper>
            <InputWrapper>
              <InputLabel>{t("review.gender")}</InputLabel>
              <StyledSelect
                value={gender || ""}
                onChange={(e) => handleGenderChange(e.target.value as string)}
                fullWidth
                displayEmpty
                renderValue={(value) => {
                  if (!value) {
                    return (
                      <MarkerPlaceholder>
                        {t("review.selectGender")}
                      </MarkerPlaceholder>
                    );
                  }

                  return <>{value}</>;
                }}
              >
                {GENDER_OPTIONS.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </StyledSelect>
            </InputWrapper>
          </PatientInfoBox>
        </SectionInfoBox>

        <SectionTitle>{t("review.bloodMarkers")}</SectionTitle>
        <TableContainer>
          <TableHeader>
            <TableHeaderCell>{t("review.marker")}</TableHeaderCell>
            <TableHeaderCell>{t("review.value")}</TableHeaderCell>
            <TableHeaderCell>{t("review.normalRange")}</TableHeaderCell>
            <TableHeaderCell />
          </TableHeader>

          {markers.map((marker) => (
            <MarkerRow
              key={marker.id}
              marker={marker}
              handleMarkerNameChange={handleMarkerNameChange}
              handleMarkerValueChange={handleMarkerValueChange}
              handleRemoveMarker={handleRemoveMarker}
            />
          ))}
        </TableContainer>

        <AddRowButton onClick={handleAddMarker}>
          {t("review.addRow")}
        </AddRowButton>

        <CommentLabel>
          <Trans i18nKey="review.commentLabel" />
        </CommentLabel>
        <StyledTextarea
          defaultValue={comment}
          onBlur={(e) => handleCommentChange(e.target.value)}
          placeholder={t("review.commentPlaceholder")}
        />

        <FooterActions>
          <BackButton onClick={handleBack} aria-label="Back">
            <img src={arrow} alt="Back" />
          </BackButton>
          <GenerateButton
            onClick={handleGenerateAnalysis}
            disabled={isGenerating || markers.length === 0}
            variant="contained"
          >
            {isGenerating ? t("common.loading") : t("review.generate")}
          </GenerateButton>
        </FooterActions>
      </ContentContainer>
    </AnalysLayout>
  );
};
