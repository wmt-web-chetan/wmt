import {
  CTA_WITH_BUTTONS_FRAGMENT,
  NEW_BUTTON_FRAGMENT,
} from "./fragmennts/pageBuilderFragments";

export async function getPageData(slug) {
  console.log(slug, "slufff");

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query { 
        pageBy(uri: "${slug}") { 
          pageBuilder { 
            pageBuilder { 
              ${CTA_WITH_BUTTONS_FRAGMENT},
              ${NEW_BUTTON_FRAGMENT}
             
            } 
          } 
        } 
      }`,
      variables: { slug },
    }),
    next: { revalidate: 60 },
  });

  return res.json();
}
