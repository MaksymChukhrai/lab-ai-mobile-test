import { useEffect, useState } from "react";
import { MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { BloodMarkerWithMeta } from "store/slices/bloodMarkersSlice";
import { AVAILABLE_MARKERS } from "constants/review";
import deleteIcon from "locals/delete.svg";
import {
  TableRow,
  TableInput,
  BackButton,
  MarkerNameText,
  MarkerSelect,
  MarkerPlaceholder,
} from "pages/ReviewPage/styles";

interface MarkerRowProps {
  marker: BloodMarkerWithMeta;
  handleMarkerNameChange: (id: string, name: string) => void;
  handleMarkerValueChange: (id: string, value: string) => void;
  handleRemoveMarker: (id: string) => void;
}

export const MarkerRow = ({
  marker,
  handleMarkerNameChange,
  handleMarkerValueChange,
  handleRemoveMarker,
}: MarkerRowProps) => {
  const { t } = useTranslation();

  const [localValue, setLocalValue] = useState(marker.value);

  useEffect(() => {
    setLocalValue(marker.value);
  }, [marker.value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9.]/g, "");
    setLocalValue(numericValue);
  };

  const handleBlur = () => {
    handleMarkerValueChange(marker.id, localValue);
  };

  return (
    <TableRow>
      {marker.isNew ? (
        <MarkerSelect
          value={marker.name}
          onChange={(e) =>
            handleMarkerNameChange(marker.id, e.target.value as string)
          }
          fullWidth
          displayEmpty
          renderValue={(value) => {
            if (!value) {
              return (
                <MarkerPlaceholder>
                  {t("review.selectMarker")}
                </MarkerPlaceholder>
              );
            }

            return <>{value}</>;
          }}
        >
          {AVAILABLE_MARKERS.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </MarkerSelect>
      ) : (
        <MarkerNameText>{marker.name}</MarkerNameText>
      )}

      <TableInput
        type="number"
        value={localValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Value"
        inputProps={{
          step: "1",
          min: "0",
        }}
      />

      <MarkerNameText>
        {marker.isNew ? "-" : marker.normalRange} {marker.unit}
      </MarkerNameText>

      <BackButton onClick={() => handleRemoveMarker(marker.id)} size="small">
        <img src={deleteIcon} alt="Delete" width={24} height={24} />
      </BackButton>
    </TableRow>
  );
};
