const CATEGORY_DETAILS = {
  precious: {
    heading: "Precious Metals",
    breadcrumbLabel: "Precious Metals",
    breadcrumbHref: "/product",
    backToHubText: "Explore all tokenized precious metals and gemstones ->",
    backToHubHref: "/product",
  },
  gemstones: {
    heading: "Gemstones",
    breadcrumbLabel: "Gemstones",
    breadcrumbHref: "/product",
    backToHubText: "Explore all tokenized precious metals and gemstones ->",
    backToHubHref: "/product",
  },
  industrial: {
    heading: "Industrial Metals",
    breadcrumbLabel: "Industrial Metals",
    breadcrumbHref: "/product",
    backToHubText: "Explore all tokenized industrial metals ->",
    backToHubHref: "/product",
  },
  rareEarth: {
    heading: "Rare Earth Elements",
    breadcrumbLabel: "Rare Earth Elements",
    breadcrumbHref: "/rare-earth",
    backToHubText: "Explore all 17 tokenized rare earth elements ->",
    backToHubHref: "/rare-earth",
  },
};

const ASSETS = [
  {
    key: "gold",
    commodityName: "Gold",
    displayName: "Gold",
    href: "/tokenized-gold-assets",
    category: "precious",
    descriptor: "Digitized access to physical gold with transparent ownership.",
  },
  {
    key: "silver",
    commodityName: "Silver",
    displayName: "Silver",
    href: "/tokenized-silver-assets",
    category: "precious",
    descriptor: "Industrial and store-of-value silver exposure in tokenized form.",
  },
  {
    key: "platinum",
    commodityName: "Platinum",
    displayName: "Platinum",
    href: "/tokenized-platinum-assets",
    category: "precious",
    descriptor: "Tokenized platinum with compliant settlement and global access.",
  },
  {
    key: "diamonds",
    commodityName: "Diamond",
    displayName: "Diamonds",
    href: "/tokenized-diamond-assets",
    category: "gemstones",
    descriptor: "Certified diamond ownership converted into liquid digital units.",
  },
  {
    key: "sapphire",
    commodityName: "Sapphire",
    displayName: "Sapphire",
    href: "/tokenized-sapphire-assets",
    category: "gemstones",
    descriptor: "High-value sapphire exposure with traceable tokenized ownership.",
  },
  {
    key: "copper",
    commodityName: "Copper",
    displayName: "Copper",
    href: "/tokenized-copper-assets",
    category: "industrial",
    descriptor: "Tokenized copper tied to real industrial demand and usage.",
  },
  {
    key: "tin",
    commodityName: "Tin",
    displayName: "Tin",
    href: "/tokenized-tin-assets",
    category: "industrial",
    descriptor: "Strategic tin participation through compliant on-chain assets.",
  },
  {
    key: "iron",
    commodityName: "Iron",
    displayName: "Iron",
    href: "/tokenized-iron-assets",
    category: "industrial",
    descriptor: "Digital iron ownership for modern commodity allocation.",
  },
  {
    key: "neodymium",
    commodityName: "Neodymium",
    displayName: "Neodymium",
    href: "/tokenized-neodymium-asset",
    category: "rareEarth",
    descriptor: "Critical magnet metal access through tokenized reserves.",
  },
  {
    key: "praseodymium",
    commodityName: "Praseodymium",
    displayName: "Praseodymium",
    href: "/tokenized-praseodymium-asset",
    category: "rareEarth",
    descriptor: "Rare-earth supply-chain exposure with transparent digital ownership.",
  },
  {
    key: "dysprosium",
    commodityName: "Dysprosium",
    displayName: "Dysprosium",
    href: "/tokenized-dysprosium-asset",
    category: "rareEarth",
    descriptor: "High-performance alloy demand captured in tokenized form.",
  },
  {
    key: "terbium",
    commodityName: "Terbium",
    displayName: "Terbium",
    href: "/tokenized-terbium-asset",
    category: "rareEarth",
    descriptor: "Advanced electronics-linked terbium available as digital assets.",
  },
  {
    key: "samarium",
    commodityName: "Samarium",
    displayName: "Samarium",
    href: "/tokenized-samarium-asset",
    category: "rareEarth",
    descriptor: "Tokenized samarium with direct participation in specialty demand.",
  },
  {
    key: "cerium",
    commodityName: "Cerium",
    displayName: "Cerium",
    href: "/tokenized-cerium-asset",
    category: "rareEarth",
    descriptor: "Cerium access designed for modern, borderless commodity markets.",
  },
  {
    key: "lanthanum",
    commodityName: "Lanthanum",
    displayName: "Lanthanum",
    href: "/tokenized-lanthanum-asset",
    category: "rareEarth",
    descriptor: "Tokenized lanthanum exposure for clean-tech supply chains.",
  },
  {
    key: "promethium",
    commodityName: "Promethium",
    displayName: "Promethium",
    href: "/tokenized-promethium-asset",
    category: "rareEarth",
    descriptor: "Scarce promethium represented through compliant digital units.",
  },
  {
    key: "europium",
    commodityName: "Europium",
    displayName: "Europium",
    href: "/tokenized-europium-asset",
    category: "rareEarth",
    descriptor: "Europium access aligned with phosphor and display technologies.",
  },
  {
    key: "gadolinium",
    commodityName: "Gadolinium",
    displayName: "Gadolinium",
    href: "/tokenized-gadolinium-asset",
    category: "rareEarth",
    descriptor: "Tokenized gadolinium for specialty industrial and medical demand.",
  },
  {
    key: "holmium",
    commodityName: "Holmium",
    displayName: "Holmium",
    href: "/tokenized-holmium-asset",
    category: "rareEarth",
    descriptor: "Holmium commodity participation through transparent tokenization.",
  },
  {
    key: "erbium",
    commodityName: "Erbium",
    displayName: "Erbium",
    href: "/tokenized-erbium-asset",
    category: "rareEarth",
    descriptor: "Erbium-backed digital assets for advanced materials exposure.",
  },
  {
    key: "thulium",
    commodityName: "Thulium",
    displayName: "Thulium",
    href: "/tokenized-thulium-asset",
    category: "rareEarth",
    descriptor: "Tokenized thulium ownership with global market accessibility.",
  },
  {
    key: "ytterbium",
    commodityName: "Ytterbium",
    displayName: "Ytterbium",
    href: "/tokenized-ytterbium-asset",
    category: "rareEarth",
    descriptor: "Ytterbium exposure delivered through compliant digital rails.",
  },
  {
    key: "lutetium",
    commodityName: "Lutetium",
    displayName: "Lutetium",
    href: "/tokenized-lutetium-asset",
    category: "rareEarth",
    descriptor: "Tokenized lutetium access for niche high-value applications.",
  },
  {
    key: "yttrium",
    commodityName: "Yttrium",
    displayName: "Yttrium",
    href: "/tokenized-yttrium-asset",
    category: "rareEarth",
    descriptor: "Yttrium-backed assets built for transparent global ownership.",
  },
  {
    key: "scandium",
    commodityName: "Scandium",
    displayName: "Scandium",
    href: "/tokenized-scandium-asset",
    category: "rareEarth",
    descriptor: "Tokenized scandium for aerospace and advanced alloys exposure.",
  },
];

const RELATED_ASSET_KEYS = {
  gold: ["silver", "platinum", "diamonds", "copper"],
  silver: ["gold", "platinum", "copper", "diamonds"],
  platinum: ["gold", "silver", "diamonds", "sapphire"],
  diamonds: ["sapphire", "gold", "platinum", "silver"],
  sapphire: ["diamonds", "gold", "platinum", "silver"],
  copper: ["tin", "iron", "silver", "neodymium"],
  tin: ["copper", "iron", "silver", "gold"],
  iron: ["copper", "tin", "neodymium", "yttrium"],
  neodymium: ["praseodymium", "dysprosium", "terbium", "samarium"],
  praseodymium: ["neodymium", "dysprosium", "cerium", "lanthanum"],
  dysprosium: ["neodymium", "terbium", "holmium", "praseodymium"],
  terbium: ["dysprosium", "neodymium", "europium", "yttrium"],
  samarium: ["neodymium", "cerium", "lanthanum", "gadolinium"],
  cerium: ["lanthanum", "neodymium", "praseodymium", "yttrium"],
  lanthanum: ["cerium", "neodymium", "praseodymium", "samarium"],
  promethium: ["neodymium", "samarium", "cerium", "yttrium"],
  europium: ["yttrium", "terbium", "gadolinium", "cerium"],
  gadolinium: ["yttrium", "europium", "samarium", "terbium"],
  holmium: ["dysprosium", "erbium", "yttrium", "thulium"],
  erbium: ["ytterbium", "holmium", "yttrium", "thulium"],
  thulium: ["erbium", "ytterbium", "holmium", "lutetium"],
  ytterbium: ["lutetium", "erbium", "thulium", "yttrium"],
  lutetium: ["ytterbium", "yttrium", "erbium", "cerium"],
  yttrium: ["europium", "gadolinium", "terbium", "cerium"],
  scandium: ["yttrium", "iron", "cerium", "lanthanum"],
};

const ASSET_BY_KEY = Object.fromEntries(ASSETS.map((asset) => [asset.key, asset]));
const ASSET_BY_PATH = Object.fromEntries(ASSETS.map((asset) => [asset.href, asset]));

function normalizeString(value) {
  return String(value || "").trim().toLowerCase();
}

function resolveAssetKey(input) {
  const normalized = normalizeString(input);
  if (!normalized) return null;

  return (
    ASSETS.find((asset) => normalizeString(asset.key) === normalized)?.key ||
    ASSETS.find((asset) => normalizeString(asset.commodityName) === normalized)?.key ||
    ASSETS.find((asset) => normalizeString(asset.displayName) === normalized)?.key ||
    null
  );
}

function toRootRelativePath(pathname = "") {
  const trimmed = String(pathname || "").trim();
  if (!trimmed) return "/";
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    try {
      const parsed = new URL(trimmed);
      return parsed.pathname || "/";
    } catch {
      return "/";
    }
  }
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

export function getAllAssets() {
  return ASSETS;
}

export function getAssetByCommodityName(commodityName) {
  const key = resolveAssetKey(commodityName);
  return key ? ASSET_BY_KEY[key] : null;
}

export function getAssetByPath(pathname) {
  const normalizedPath = toRootRelativePath(pathname);
  return ASSET_BY_PATH[normalizedPath] || null;
}

export function getTokenizedLabel(assetOrName) {
  const asset =
    typeof assetOrName === "string"
      ? getAssetByCommodityName(assetOrName)
      : assetOrName;
  const label = asset?.displayName || String(assetOrName || "").trim();
  return `Tokenized ${label}`;
}

export function getRelatedAssets(commodityName) {
  const sourceAsset = getAssetByCommodityName(commodityName);
  if (!sourceAsset) return [];
  const relatedKeys = RELATED_ASSET_KEYS[sourceAsset.key] || [];
  return relatedKeys
    .map((key) => ASSET_BY_KEY[key])
    .filter(Boolean)
    .slice(0, 4);
}

export function getGroupedAssetsForHub() {
  return [
    {
      heading: CATEGORY_DETAILS.precious.heading,
      assets: ASSETS.filter((asset) => asset.category === "precious"),
    },
    {
      heading: CATEGORY_DETAILS.gemstones.heading,
      assets: ASSETS.filter((asset) => asset.category === "gemstones"),
    },
    {
      heading: CATEGORY_DETAILS.industrial.heading,
      assets: ASSETS.filter((asset) => asset.category === "industrial"),
    },
    {
      heading: CATEGORY_DETAILS.rareEarth.heading,
      assets: ASSETS.filter((asset) => asset.category === "rareEarth"),
    },
  ];
}

export function getBackToHubDetails(commodityName) {
  const asset = getAssetByCommodityName(commodityName);
  if (!asset) {
    return {
      text: CATEGORY_DETAILS.precious.backToHubText,
      href: CATEGORY_DETAILS.precious.backToHubHref,
    };
  }
  const category = CATEGORY_DETAILS[asset.category] || CATEGORY_DETAILS.precious;
  return {
    text: category.backToHubText,
    href: category.backToHubHref,
  };
}

export function getBreadcrumbItems(commodityName) {
  const asset = getAssetByCommodityName(commodityName);
  if (!asset) return [];

  const category = CATEGORY_DETAILS[asset.category] || CATEGORY_DETAILS.precious;
  return [
    { label: "Home", href: "/" },
    { label: "Products", href: "/product" },
    { label: category.breadcrumbLabel, href: category.breadcrumbHref },
    { label: getTokenizedLabel(asset), href: null },
  ];
}
