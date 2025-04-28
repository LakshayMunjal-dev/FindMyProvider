export const fetchProviders = async (firstName, lastName, zipCode) => {
    try {
      let url = `https://npiregistry.cms.hhs.gov/api/?version=2.1&limit=10`;
  
      if (firstName) url += `&first_name=${firstName}`;
      if (lastName) url += `&last_name=${lastName}`;
      if (zipCode) url += `&postal_code=${zipCode}`;
  
      console.log("🔗 CMS API URL:", url); // Debugging output
  
      const response = await fetch(url);
      const data = await response.json();
      
      console.log("🧹 Fetched Data:", data); // See the actual data returned
  
      return data.results || [];
    } catch (error) {
      console.error("❌ Error fetching providers:", error);
      return [];
    }
  };
  