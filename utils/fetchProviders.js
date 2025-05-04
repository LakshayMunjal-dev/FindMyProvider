export const fetchProviders = async (firstName, lastName, zipCode, gender, taxonomy, entityType, limit = 50) => {
    try {
      let url = `https://npiregistry.cms.hhs.gov/api/?version=2.1&limit=${limit}`;
  
      if (firstName) url += `&first_name=${firstName}`;
      if (lastName) url += `&last_name=${lastName}`;
      if (zipCode) url += `&postal_code=${zipCode}`;
      if (gender) url += `&gender=${gender}`;
      if (taxonomy) url += `&taxonomy_description=${encodeURIComponent(taxonomy)}`;
      if (entityType) url += `&enumeration_type=${entityType}`;
  
      console.log("🔗 CMS API URL:", url);
  
      const response = await fetch(url);
      const data = await response.json();
      
      console.log("🧹 Fetched Data:", data);
  
      return data.results || [];
    } catch (error) {
      console.error("❌ Error fetching providers:", error);
      return [];
    }
  };
  