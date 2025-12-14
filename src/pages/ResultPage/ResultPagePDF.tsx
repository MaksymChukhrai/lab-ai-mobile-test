import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import type { TFunction } from "i18next";
import type { AnalysisResponse } from "store/api/bloodMarkersApi";
import PoppinsLight from "theme/fonts/Poppins-Light.ttf";
import PoppinsRegular from "theme/fonts/Poppins-Regular.ttf";
import PoppinsMedium from "theme/fonts/Poppins-Medium.ttf";
import PoppinsSemiBold from "theme/fonts/Poppins-SemiBold.ttf";
import PoppinsBold from "theme/fonts/Poppins-Bold.ttf";
import DMSansLight from "theme/fonts/DMSans-Light.ttf";
import DMSansRegular from "theme/fonts/DMSans-Regular.ttf";
import DMSansMedium from "theme/fonts/DMSans-Medium.ttf";
import DMSansSemiBold from "theme/fonts/DMSans-SemiBold.ttf";
import DMSansBold from "theme/fonts/DMSans-Bold.ttf";
import errorIcon from "locals/error.png";
import logoLightIcon from "locals/logoLight.png";
import logoDarkIcon from "locals/logoDark.png";
import checkIcon from "locals/check.png";

Font.register({
  family: "Poppins",
  fonts: [
    {
      src: PoppinsLight,
      fontWeight: 300,
    },
    {
      src: PoppinsRegular,
      fontWeight: 400,
    },
    {
      src: PoppinsMedium,
      fontWeight: 500,
    },
    {
      src: PoppinsSemiBold,
      fontWeight: 600,
    },
    {
      src: PoppinsBold,
      fontWeight: 700,
    },
  ],
});

Font.register({
  family: "DM Sans",
  fonts: [
    {
      src: DMSansLight,
      fontWeight: 300,
    },
    {
      src: DMSansRegular,
      fontWeight: 400,
    },
    {
      src: DMSansMedium,
      fontWeight: 500,
    },
    {
      src: DMSansSemiBold,
      fontWeight: 600,
    },
    {
      src: DMSansBold,
      fontWeight: 700,
    },
  ],
});

const COLORS = {
  PRIMARY_DARK: "#0B1F56",
  PRIMARY_LIGHT: "#6997ED",
  WHITE: "#FFFFFF",
  SECONDARY_GRAY: "#878F9E",
  SECONDARY_GREEN: "#45A76A",
  SECONDARY_YELLOW: "#FFE207",
  SECONDARY_ORANGE: "#C89600",
  SECONDARY_RED: "#BC0003",
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "Poppins",
    fontSize: 10,
    backgroundColor: COLORS.WHITE,
  },
  container: {
    padding: "35px 25px",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 40,
  },
  headerSubtitle: {
    fontFamily: "DM Sans",
    fontWeight: 400,
    fontSize: 9,
    color: COLORS.PRIMARY_DARK,
    width: "30%",
  },
  descriptionContainer: {
    flexDirection: "column",
    gap: 4,
  },
  descriptionText: {
    fontFamily: "DM Sans",
    fontWeight: 300,
    fontSize: 12,
    color: COLORS.PRIMARY_DARK,
  },
  headerTitle: {
    marginBottom: 20,
    alignItems: "center",
  },
  logo: {
    width: 26,
    height: 26,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  logoText: {
    fontFamily: "DM Sans",
    fontWeight: 700,
    fontSize: 24,
    color: COLORS.PRIMARY_DARK,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: COLORS.PRIMARY_DARK,
    textAlign: "center",
    fontFamily: "DM Sans",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 300,
    color: COLORS.PRIMARY_DARK,
    marginBottom: 15,
    textAlign: "center",
  },
  warningBox: {
    flexDirection: "row",
    gap: 7,
    textAlign: "center",
    alignItems: "center",
    margin: "0 auto",
    marginBottom: 20,
    width: "70%",
  },
  warningIcon: {
    width: 14,
    height: 14,
  },
  warningText: {
    fontSize: 11,
    color: COLORS.SECONDARY_RED,
    fontWeight: 400,
    fontFamily: "DM Sans",
  },
  statusBox: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 50,
    marginBottom: 25,
  },
  statusItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    color: COLORS.PRIMARY_DARK,
    fontWeight: 400,
  },
  table: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 30,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: COLORS.PRIMARY_DARK,
    padding: "20px 20px",
  },
  tableHeaderCell: {
    fontSize: 11,
    color: COLORS.WHITE,
    fontWeight: 600,
  },
  tableRow: {
    flexDirection: "row",
    padding: "15px 20px",
    alignItems: "center",
  },
  tableCell: {
    fontSize: 9,
    color: COLORS.PRIMARY_DARK,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    fontWeight: 400,
  },
  sectionBox: {
    backgroundColor: `${COLORS.SECONDARY_GREEN}15`,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 600,
    color: COLORS.SECONDARY_GREEN,
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 9,
    fontWeight: 400,
    color: COLORS.SECONDARY_GREEN,
  },
  recommendationGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 10,
  },
  recommendationCard: {
    width: "48%",
    backgroundColor: COLORS.WHITE,
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    gap: 10,
  },
  checkIcon: {
    width: 16,
    height: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 9,
    fontWeight: 600,
    color: COLORS.PRIMARY_DARK,
    marginBottom: 3,
  },
  cardText: {
    fontSize: 8,
    fontWeight: 300,
    color: COLORS.PRIMARY_DARK,
  },
  assessmentBox: {
    backgroundColor: `${COLORS.SECONDARY_ORANGE}15`,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  assessmentTitle: {
    fontSize: 11,
    fontWeight: 600,
    color: COLORS.SECONDARY_ORANGE,
    marginBottom: 8,
  },
  assessmentText: {
    fontSize: 9,
    fontWeight: 400,
    color: COLORS.SECONDARY_ORANGE,
    marginBottom: 6,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    padding: "30px 25px",
    backgroundColor: COLORS.PRIMARY_DARK,
  },
  footerText: {
    fontSize: 8,
    color: `${COLORS.WHITE}80`,
    textAlign: "left",
    width: "40%",
  },
});

const A4_WIDTH = 595;
export interface PDFDocumentProps {
  data: AnalysisResponse;
  t: TFunction;
  pageHeight: number;
}

export const AnalysisPdfDocument: React.FC<PDFDocumentProps> = ({
  data,
  t,
  pageHeight,
}) => {
  const pageSize: [number, number] = pageHeight
    ? [A4_WIDTH, pageHeight]
    : [A4_WIDTH, 842];

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "abnormal":
        return COLORS.SECONDARY_RED;
      case "limit":
        return COLORS.SECONDARY_YELLOW;
      default:
        return COLORS.SECONDARY_GREEN;
    }
  };

  const getRowBackgroundColor = (status: string): string => {
    switch (status) {
      case "abnormal":
        return `${COLORS.SECONDARY_RED}20`;
      case "limit":
        return `${COLORS.SECONDARY_YELLOW}20`;
      default:
        return `${COLORS.SECONDARY_GREEN}20`;
    }
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB");

  return (
    <Document>
      <Page size={pageSize} style={styles.page}>
        <View style={styles.container}>
          <View style={styles.headerContainer} fixed>
            <View>
              <View style={styles.logoContainer}>
                <Image src={logoDarkIcon} style={styles.logo} />
                <Text style={styles.logoText}>{t("logo.title")}</Text>
              </View>
              <Text style={styles.headerSubtitle}>
                {t("result.warningTextPDF")}
              </Text>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>
                <Text style={{ fontWeight: 500 }}>{t("result.datePDF")}</Text>{" "}
                {formattedDate}
              </Text>
              <Text style={styles.descriptionText}>
                <Text style={{ fontWeight: 500 }}>{t("result.agePDF")}</Text>
                {data.age}
              </Text>
              <Text style={styles.descriptionText}>
                <Text style={{ fontWeight: 500 }}>{t("result.genderPDF")}</Text>
                {data.gender}
              </Text>
            </View>
          </View>

          <View style={styles.headerTitle}>
            <Text style={styles.title}>{t("result.titlePDF")}</Text>
            <Text style={styles.subtitle}>{t("result.subtitle")}</Text>

            <View style={styles.warningBox}>
              <Image src={errorIcon} style={styles.warningIcon} />
              <Text style={styles.warningText}>{t("result.warningText")}</Text>
            </View>
          </View>

          <View style={styles.statusBox}>
            <View style={styles.statusItem}>
              <View
                style={[
                  styles.statusDot,
                  { backgroundColor: getStatusColor("normal") },
                ]}
              />
              <Text style={styles.statusText}>{t("result.normal")}</Text>
            </View>
            <View style={styles.statusItem}>
              <View
                style={[
                  styles.statusDot,
                  { backgroundColor: getStatusColor("limit") },
                ]}
              />
              <Text style={styles.statusText}>{t("result.limit")}</Text>
            </View>
            <View style={styles.statusItem}>
              <View
                style={[
                  styles.statusDot,
                  { backgroundColor: getStatusColor("abnormal") },
                ]}
              />
              <Text style={styles.statusText}>{t("result.abnormal")}</Text>
            </View>
          </View>

          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderCell, { width: "25%" }]}>
                {t("result.markerLabel")}
              </Text>
              <Text style={[styles.tableHeaderCell, { width: "15%" }]}>
                {t("result.valueLabel")}
              </Text>
              <Text style={[styles.tableHeaderCell, { width: "20%" }]}>
                {t("result.normalLabel")}
              </Text>
              <Text style={[styles.tableHeaderCell, { width: "40%" }]}>
                {t("result.recomendLabel")}
              </Text>
            </View>

            {data.markers.map((marker, index) => (
              <View
                key={index}
                wrap={false}
                style={[
                  styles.tableRow,
                  {
                    backgroundColor: getRowBackgroundColor(marker.indicator),
                  },
                ]}
              >
                <View style={[styles.tableCell, { width: "25%" }]}>
                  <View
                    style={[
                      styles.statusDot,
                      { backgroundColor: getStatusColor(marker.indicator) },
                    ]}
                  />
                  <Text>{marker.name}</Text>
                </View>
                <Text style={[styles.tableCell, { width: "15%" }]}>
                  {marker.value} {marker.unit}
                </Text>
                <Text style={[styles.tableCell, { width: "20%" }]}>
                  {marker.normalRange}
                </Text>
                <Text style={[styles.tableCell, { width: "40%" }]}>
                  {marker.recommendation}
                </Text>
              </View>
            ))}
          </View>

          {data.userCommentResponse && (
            <View style={styles.sectionBox} wrap={false}>
              <Text style={styles.sectionTitle}>
                {t("result.answerToQuestion")}
              </Text>
              <Text style={styles.sectionText}>{data.userCommentResponse}</Text>
            </View>
          )}

          {data.recommendations.map((rec, recIndex) => (
            <View key={recIndex} style={styles.sectionBox} wrap={false}>
              <Text style={styles.sectionTitle}>{rec.name} recommendation</Text>
              <Text style={styles.sectionText}>
                {t("result.recommendDisclaimer")}
              </Text>

              <View style={styles.recommendationGrid}>
                {rec.items.map((item, itemIndex) => (
                  <View key={itemIndex} style={styles.recommendationCard}>
                    <Image src={checkIcon} style={styles.checkIcon} />
                    <View style={styles.cardContent}>
                      <Text style={styles.cardTitle}>{item.name}</Text>
                      <Text style={styles.cardText}>
                        {item.recommendations}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))}

          <View style={styles.assessmentBox} wrap={false}>
            <Text style={styles.assessmentTitle}>
              {t("result.medicalAssessment")}
            </Text>
            <Text style={styles.assessmentText}>
              <Text style={{ fontWeight: 600 }}>
                {t("result.overallHealthTitlePDF")}
              </Text>
              {data.finalAssessment.overallHealthStatus}
            </Text>
            <Text style={styles.assessmentText}>
              <Text style={{ fontWeight: 600 }}>
                {t("result.summaryTitlePDF")}
              </Text>
              {data.finalAssessment.recommendationSummary}
            </Text>
          </View>
        </View>
        <View style={styles.footer} fixed>
          <View style={styles.logoContainer}>
            <Image src={logoLightIcon} style={styles.logo} />
            <Text style={[styles.logoText, { color: COLORS.WHITE }]}>
              {t("logo.title")}
            </Text>
          </View>
          <Text style={styles.footerText}>{t("footer.description")}</Text>
        </View>
      </Page>
    </Document>
  );
};
