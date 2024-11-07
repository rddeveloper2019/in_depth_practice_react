import { UserDataForm } from "./UserDataForm";
import { UserDetails } from "./UserDetails";
import { UserPreferences } from "./UserPreferences";
import { useFetchUserData } from "./useFetchUserData.js";

export function LongUserProfile({ userId }) {
  const {
    userData,
    editMode,
    userPreferences,
    toggleEditMode,
    updatePreferences,
  } = useFetchUserData();
  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Profile</h1>
      {editMode ? (
        <UserDataForm userData={userData} onChange={setUserData} />
      ) : (
        <UserDetails userData={userData} />
      )}
      <button onClick={toggleEditMode}>
        {editMode ? "Save Changes" : "Edit Profile"}
      </button>
      <UserPreferences
        preferences={userPreferences}
        onPreferencesChange={updatePreferences}
      />
    </div>
  );
}
