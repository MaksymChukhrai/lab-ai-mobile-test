import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { STEP_PATHS } from "constants/steps";
import {
  useGetBloodMarkersQuery,
  useGenerateAnalysisMutation,
} from "store/api/bloodMarkersApi";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectSelectedOptions } from "store/slices/optionSlice";
import {
  setBloodMarkersData,
  updateMarkerName,
  updateMarkerValue,
  addMarker,
  removeMarker,
  setComment,
  updateAge,
  updateGender,
  selectBloodMarkers,
  selectAge,
  selectGender,
  selectComment,
} from "store/slices/bloodMarkersSlice";

export const useReviewPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useGetBloodMarkersQuery();
  const [generateAnalysis, { isLoading: isGenerating }] =
    useGenerateAnalysisMutation();

  const markers = useAppSelector(selectBloodMarkers);
  const age = useAppSelector(selectAge);
  const gender = useAppSelector(selectGender);
  const comment = useAppSelector(selectComment);
  const selectedOptions = useAppSelector(selectSelectedOptions);

  const [birthDate, setBirthDate] = useState<string>("");

  useEffect(() => {
    if (data && markers.length === 0) {
      dispatch(setBloodMarkersData(data));

      if (data.age === null) setBirthDate("");
      const calculatedBirthYear = new Date().getFullYear() - data.age;
      setBirthDate(`01/01/${calculatedBirthYear}`);
    }
  }, [data, dispatch, markers.length]);

  useEffect(() => {
    if (age === null) setBirthDate("");

    if (age > 0 && !birthDate) {
      const calculatedBirthYear = new Date().getFullYear() - age;
      setBirthDate(`01/01/${calculatedBirthYear}`);
    }
  }, [age, birthDate]);

  const handleMarkerNameChange = (id: string, name: string): void => {
    dispatch(updateMarkerName({ id, name }));
  };

  const handleMarkerValueChange = (id: string, value: string): void => {
    const numericValue = value.replace(/[^0-9.]/g, "");
    dispatch(updateMarkerValue({ id, value: numericValue }));
  };

  const handleAddMarker = (): void => {
    dispatch(addMarker());
  };

  const handleRemoveMarker = (id: string): void => {
    dispatch(removeMarker(id));
  };

  const handleCommentChange = (value: string): void => {
    dispatch(setComment(value));
  };

  const handleBirthDateChange = (value: string): void => {
    setBirthDate(value);

    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = value.match(dateRegex);
    if (match) {
      const [, , , year] = match;
      const calculatedAge = new Date().getFullYear() - parseInt(year, 10);
      dispatch(updateAge(calculatedAge));
    }
  };

  const handleGenderChange = (value: string): void => {
    dispatch(updateGender(value));
  };

  const handleBack = (): void => {
    navigate(STEP_PATHS.options);
  };

  const handleGenerateAnalysis = async (): Promise<void> => {
    try {
      const analysisData = {
        age,
        gender,
        markers: markers
          .filter((marker) => marker.name && marker.value)
          .map((marker) => ({
            name: marker.name,
            value: marker.value,
            unit: marker.unit,
          })),
        comment,
        selectedOptions,
      };

      await generateAnalysis(analysisData).unwrap();
      navigate(STEP_PATHS.review);
    } catch (error) {
      console.error("Failed to generate analysis:", error);
    }
  };

  return {
    markers,
    age,
    gender,
    birthDate,
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
  };
};
