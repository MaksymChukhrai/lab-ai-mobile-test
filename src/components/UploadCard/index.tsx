import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { useSignInForm } from "@/hooks/useSignInForm";
import heart from "locals/heart.svg";
import download from "locals/download.svg";
import arrow from "locals/arrow.svg";
import deleteIcon from "locals/delete.svg";
import error_new from "locals/error_new.svg";
import fileIcon from "locals/fileIcon.svg";
import { FILE_INPUTS, UPLOAD_MODE } from "@/constants/fileUpload";
import { useUploadCard } from "./UploadCardHooks";
import {
  Upload,
  UploadContainer,
  PreTitleBox,
  PreTitle,
  Title,
  Description,
  UploadBox,
  DropText,
  LoaderBox,
  ProgressBar,
  DeleteIconBox,
  CLickText,
  HiddenInput,
  SupportsText,
  UploadButton,
  ErrorMessage,
  ErrorMessageMobile,
  ErrorImage,
  GreenBox,
  GreenText,
  TextBox,
  GreenUl,
  ButtonsBox,
  ContinueButton,
  ResultsBox,
  LoaderText,
  DropTextPrefix,
  DescriptionMobile,
  BackImg,
  DeleteImg,
  PdfImg,
  ContinueButtonMobile,
  ErrorMessageBox,
  MobileBox,
  CircleLoader,
  HeartImg,
} from "./styles";

interface UploadCardProps {
  mode?: (typeof UPLOAD_MODE)[keyof typeof UPLOAD_MODE];
}

export const UploadCard = ({ mode = UPLOAD_MODE.PREVIEW }: UploadCardProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const uploadEnabled = mode === UPLOAD_MODE.FULL;
  const { handleButtonSignIn } = useSignInForm();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    fileInputRef,
    handleFileChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    handleBrowseClick,
    handleUpload,
    handleContinue,
    handleBack,
    handleDeleteFile,
    isProcessing,
    ocrProgress,
    ocrText,
    isFileSelected,
    errorMessage,
    showLoader,
    selectedFileName,
  } = useUploadCard(uploadEnabled);

  const buttonClassName = errorMessage ? "error" : "";
  const isMobileFinalStage = isMobile && showLoader && !isProcessing;

  return (
    <>
      <Upload $wide={uploadEnabled}>
        {uploadEnabled ? (
          <UploadContainer $wide={uploadEnabled}>
            <Title $wide={uploadEnabled}>{t("card.title")}</Title>
            <Description $wide={uploadEnabled}>
              {t("card.description")}
            </Description>
            <DescriptionMobile $wide={uploadEnabled}>
              {t("card.descriptionMobile")}
            </DescriptionMobile>
            {!isFileSelected || !showLoader || errorMessage !== null ? (
              <UploadBox
                $wide={uploadEnabled}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={handleBrowseClick}
              >
                <img src={download} alt="download" />
                <DropText $wide={uploadEnabled}>{t("card.drop")}</DropText>
                <CLickText $wide={uploadEnabled}>{t("card.click")}</CLickText>
                <SupportsText $wide={uploadEnabled}>
                  {t("card.supports")}
                </SupportsText>
                <HiddenInput
                  ref={fileInputRef}
                  type="file"
                  accept={FILE_INPUTS}
                  onChange={handleFileChange}
                />
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
              </UploadBox>
            ) : (
              <LoaderBox>
                {isProcessing ? (
                  <>
                    <CircleLoader />
                    <DropText>{ocrProgress}%</DropText>
                  </>
                ) : (
                  <ResultsBox>
                    <PdfImg src={fileIcon}></PdfImg>
                    <LoaderText>
                      <DropTextPrefix>
                        {t("card.resultPrefix")} {selectedFileName}
                      </DropTextPrefix>
                      <DropText>{t("card.ready")}</DropText>
                    </LoaderText>
                    <DeleteIconBox>
                      <IconButton onClick={handleDeleteFile}>
                        <DeleteImg src={deleteIcon}></DeleteImg>
                      </IconButton>
                    </DeleteIconBox>
                  </ResultsBox>
                )}

                <ProgressBar progress={ocrProgress} />
              </LoaderBox>
            )}
            {!showLoader && (
              <UploadButton
                $wide={uploadEnabled}
                variant="contained"
                color="primary"
                onClick={handleUpload}
                disabled={isProcessing}
                className={buttonClassName}
              >
                {t("card.button")}
              </UploadButton>
            )}
            {isMobile && errorMessage && !showLoader && (
              <MobileBox>
                <ErrorMessageBox>
                  <ErrorImage src={error_new} />
                  <ErrorMessageMobile>{errorMessage}</ErrorMessageMobile>
                </ErrorMessageBox>
              </MobileBox>
            )}
            {!isMobileFinalStage && (
              <GreenBox>
                <TextBox>
                  <GreenText>{t("card.list.title")}</GreenText>
                  <GreenUl>
                    <li>
                      <GreenText>{t("card.list.line1")}</GreenText>
                    </li>
                    <li>
                      <GreenText>{t("card.list.line2")}</GreenText>
                    </li>
                    <li>
                      <GreenText>{t("card.list.line3")}</GreenText>
                    </li>
                    <li>
                      <GreenText>{t("card.list.line4")}</GreenText>
                    </li>
                  </GreenUl>
                </TextBox>
              </GreenBox>
            )}
            {!isProcessing && showLoader && (
              <>
                <MobileBox>
                  <ContinueButtonMobile
                    onClick={handleContinue}
                    className={buttonClassName}
                  >
                    {t("card.continue")}
                  </ContinueButtonMobile>
                </MobileBox>
              </>
            )}
            <ButtonsBox>
              <IconButton onClick={handleBack}>
                <BackImg src={arrow} alt="arrow" />
              </IconButton>
              <ContinueButton
                variant="contained"
                disabled={!ocrText || isProcessing}
                onClick={handleContinue}
              >
                {t("card.continue")}
              </ContinueButton>
            </ButtonsBox>
          </UploadContainer>
        ) : (
          <UploadContainer>
            <PreTitleBox>
              <HeartImg src={heart} alt="heart" />
              <PreTitle>{t("card.preTitle")}</PreTitle>
            </PreTitleBox>
            <Title>{t("card.title")}</Title>
            <Description>{t("card.description")}</Description>
            <UploadBox>
              <img src={download} alt="heart" />
              <DropText>{t("card.drop")}</DropText>
              <CLickText>{t("card.click")}</CLickText>
              <SupportsText>{t("card.supports")}</SupportsText>
            </UploadBox>
            <UploadButton
              variant="contained"
              color="primary"
              onClick={handleButtonSignIn}
            >
              {t("card.button")}
            </UploadButton>
          </UploadContainer>
        )}
      </Upload>
    </>
  );
};

export default UploadCard;
