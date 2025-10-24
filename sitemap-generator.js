const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

async function generateSitemap() {
  const domain = "https://www.streelancer.com"; // 🔴 replace with your real domain
  const routes = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/Signup", changefreq: "monthly", priority: 0.6 },
    { url: "/login", changefreq: "monthly", priority: 0.6 },
    { url: "/Registration", changefreq: "monthly", priority: 0.6 },
    { url: "/Remotetalent", changefreq: "weekly", priority: 0.7 },
    { url: "/DEITalent", changefreq: "weekly", priority: 0.7 },
    { url: "/DEITalenthire", changefreq: "weekly", priority: 0.7 },
    { url: "/Community", changefreq: "weekly", priority: 0.7 },
    { url: "/Academy", changefreq: "monthly", priority: 0.5 },
    { url: "/Community/foundermistake", changefreq: "monthly", priority: 0.6 },
    { url: "/Community/Skills", changefreq: "monthly", priority: 0.6 },
    { url: "/Community/Talent", changefreq: "monthly", priority: 0.6 },
    { url: "/AboutUs", changefreq: "yearly", priority: 0.5 },
    { url: "/Termsandconditions", changefreq: "yearly", priority: 0.5 },
    { url: "/linkedin-success", changefreq: "monthly", priority: 0.6 },
  ];

  // Build sitemap
  const stream = new SitemapStream({ hostname: domain });
  routes.forEach((route) => stream.write(route));
  stream.end();

  const data = await streamToPromise(stream);
  fs.writeFileSync("./public/sitemap.xml", data.toString());

  console.log("✅ Sitemap generated at public/sitemap.xml");
}

generateSitemap();
