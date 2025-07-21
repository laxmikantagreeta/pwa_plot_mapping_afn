// api.js
export const fetchReferenceData = async () => {
  const response = await fetch(
    "https://bayer.agreeta.com/agFarm_Bayer_Kharif25_WebAPI_Outlet/api/SSMAKMLClassification",
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${btoa("System:3VnznHx6bASVvsxhbea8TAFeKa7CFYvZyL+/M8G0SNg=")}`
      }
    }
  );

  if (!response.ok) throw new Error("Failed to fetch reference data");

  const data = await response.json();
  return data.data;
};
