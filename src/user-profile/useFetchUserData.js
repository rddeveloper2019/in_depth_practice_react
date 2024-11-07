import { useEffect, useState } from "react";
import { useAPI } from "./useAPI.js";

export const useFetchUserData = () => {
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [userPreferences, setUserPreferences] = useState({
    theme: "light",
    notifications: true,
  });

  // Fetching user data
  const api = useAPI();
  useEffect(() => {
    api
      .fetchUser(userId)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch(() =>
        setUserData({
          name: "Unknown",
          email: "unknown@domain.invalid",
        }),
      );
  }, [api, userId]);

  // Initializing user preferences
  useEffect(() => {
    const storedPreferences = localStorage.getItem("userPreferences");
    if (storedPreferences) {
      setUserPreferences(JSON.parse(storedPreferences));
    }
  }, []);

  // Updating user preferences
  useEffect(() => {
    localStorage.setItem("userPreferences", JSON.stringify(userPreferences));
  }, [userPreferences]);

  // Toggle edit mode
  const toggleEditMode = () => setEditMode(!editMode);

  // Update preferences
  const updatePreferences = (newPreferences) =>
    setUserPreferences(newPreferences);

  return {
    userData,
    editMode,
    userPreferences,
    toggleEditMode,
    updatePreferences,
  };
};
