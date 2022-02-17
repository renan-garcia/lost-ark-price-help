import {
  MAYHEM,
  MASTER_S_TENACITY,
  CURSED_DOLL,
  KEEN_BLUNT_WEAPON,
  RAID_CAPTAIN,
  MASTER_OF_AMBUSH,
  GRUDGE,
  MASS_INCREASE,
  BLESSED_AURA,
  AWAKENING,
  EXPERT,
  SPIRIT_ABSORPTION,
  HEAVY_ARMOR,
  DROPS_OF_ETHER,
  VITAL_POINT_STRIKE,
  JUDGEMENT,
  BERSERKS_TECHNIQUE,
  SUPER_CHARGE,
} from './engravings.js';
import { CLASS_ENGRAVING, STARTER_ENGRAVING, ADDON_1, ADDON_2, ADDON_3, ADDON_4, ADDON_5, ADDON_6, ADVANCE_1, ADVANCE_2 } from './tiers.js';
import { CRIT, SPECIALIZATION, DOMINATION, SWIFTNESS, ENDURANCE, EXPERTISE } from './attributes.js';

const engravings = [
  MAYHEM,
  MASTER_S_TENACITY,
  CURSED_DOLL,
  KEEN_BLUNT_WEAPON,
  RAID_CAPTAIN,
  MASTER_OF_AMBUSH,
  GRUDGE,
  MASS_INCREASE,
  BLESSED_AURA,
  AWAKENING,
  EXPERT,
  SPIRIT_ABSORPTION,
  HEAVY_ARMOR,
  DROPS_OF_ETHER,
  VITAL_POINT_STRIKE,
  JUDGEMENT,
  BERSERKS_TECHNIQUE,
  SUPER_CHARGE,
];

const attributes = [
  CRIT,
  SPECIALIZATION,
  DOMINATION,
  SWIFTNESS,
  ENDURANCE,
  EXPERTISE,
];

const classes = [
  {
    name: "Mayhem Berserker",
    iconSource: "https://lostark.wiki.fextralife.com/file/Lost-Ark/berserker-class-icon-lost-ark-wiki-guide-100.png",
    engravings: [
      {name: MAYHEM, tier: CLASS_ENGRAVING },
      {name: MASTER_S_TENACITY, tier: STARTER_ENGRAVING},
      {name: CURSED_DOLL, tier: ADDON_1},
      {name: KEEN_BLUNT_WEAPON, tier: ADDON_2},
      {name: RAID_CAPTAIN, tier: ADDON_3},
      {name: MASTER_OF_AMBUSH, tier: ADDON_4},
      {name: GRUDGE, tier: ADVANCE_1},
      {name: MASS_INCREASE, tier: ADVANCE_2}
    ],
    stats: [CRIT, SWIFTNESS],
  },
  {
    name: "Support Paladin",
    iconSource: "https://lostark.wiki.fextralife.com/file/Lost-Ark/paladin-class-icon-lost-ark-wiki-guide-100.png",
    engravings: [
      {name: BLESSED_AURA, tier: CLASS_ENGRAVING },
      {name: AWAKENING, tier: STARTER_ENGRAVING},
      {name: EXPERT, tier: ADDON_1},
      {name: SPIRIT_ABSORPTION, tier: ADDON_2},
      {name: HEAVY_ARMOR, tier: ADDON_3},
      {name: DROPS_OF_ETHER, tier: ADDON_4},
      {name: VITAL_POINT_STRIKE, tier: ADDON_5},
      {name: JUDGEMENT, tier: ADDON_6}
    ],
    stats: [SPECIALIZATION, SWIFTNESS],
  },
  {
    name: "Technique Berserker",
    iconSource: "https://lostark.wiki.fextralife.com/file/Lost-Ark/berserker-class-icon-lost-ark-wiki-guide-100.png",
    engravings: [
      {name: MASTER_OF_AMBUSH, tier: CLASS_ENGRAVING },
      {name: BERSERKS_TECHNIQUE, tier: STARTER_ENGRAVING},
      {name: AWAKENING, tier: ADDON_1},
      {name: SPIRIT_ABSORPTION, tier: ADDON_2},
      {name: RAID_CAPTAIN, tier: ADDON_3},
      {name: KEEN_BLUNT_WEAPON, tier: ADDON_4},
      {name: SUPER_CHARGE, tier: ADDON_5},
      {name: GRUDGE, tier: ADVANCE_1},
      {name: CURSED_DOLL, ADVANCE_2},
    ],
    stats: [SPECIALIZATION, CRIT],
  }
];

const tiersColors = [
  { key: CLASS_ENGRAVING, color: "#7ff57f", },
  { key: STARTER_ENGRAVING, color: "#e3e323", },
  { key: ADDON_1, color: "#eb4747", },
  { key: ADDON_2, color: "#eb4747", },
  { key: ADDON_3, color: "#eb4747", },
  { key: ADDON_4, color: "#eb4747", },
  { key: ADDON_5, color: "#eb4747", },
  { key: ADDON_6, color: "#eb4747", },
  { key: ADVANCE_1, color: "#47b6eb", },
  { key: ADVANCE_2, color: "#47b6eb", },
];

export { engravings, attributes, classes, tiersColors };