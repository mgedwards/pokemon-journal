const moves = [
{"id": "0", "name": "MOVE_UNSET", "type": "", "pw": "", "duration": ""},
{"id": "1", "name": "THUNDER_SHOCK", "type": "Electric", "pw": "", "duration": ""},
{"id": "2", "name": "QUICK_ATTACK", "type": "Normal", "pw": "", "duration": ""},
{"id": "3", "name": "SCRATCH", "type": "Normal", "pw": "", "duration": ""},
{"id": "4", "name": "EMBER", "type": "Fire", "pw": "", "duration": ""},
{"id": "5", "name": "VINE_WHIP", "type": "Grass", "pw": "", "duration": ""},
{"id": "6", "name": "TACKLE", "type": "Normal", "pw": "", "duration": ""},
{"id": "7", "name": "RAZOR_LEAF", "type": "Grass", "pw": "", "duration": ""},
{"id": "8", "name": "TAKE_DOWN", "type": "", "pw": "", "duration": ""},
{"id": "9", "name": "WATER_GUN", "type": "Water", "pw": "", "duration": ""},
{"id": "10", "name": "BITE", "type": "Dark", "pw": "", "duration": ""},
{"id": "11", "name": "POUND", "type": "Normal", "pw": "", "duration": ""},
{"id": "12", "name": "DOUBLE_SLAP", "type": "", "pw": "", "duration": ""},
{"id": "13", "name": "WRAP", "type": "Normal", "pw": "60", "duration": "2900", "nrg": "3"},
{"id": "14", "name": "HYPER_BEAM", "type": "Normal", "pw": "150", "duration": "3800", "nrg": "1"},
{"id": "15", "name": "LICK", "type": "Ghost", "pw": "", "duration": ""},
{"id": "16", "name": "DARK_PULSE", "type": "Dark", "pw": "80", "duration": "3000", "nrg": "2"},
{"id": "17", "name": "SMOG", "type": "", "pw": "", "duration": ""},
{"id": "18", "name": "SLUDGE", "type": "Poison", "pw": "50", "duration": "2100", "nrg": "3"},
{"id": "19", "name": "METAL_CLAW", "type": "Steel", "pw": "", "duration": ""},
{"id": "20", "name": "VICE_GRIP", "type": "Normal", "pw": "35", "duration": "1900", "nrg": "3"},
{"id": "21", "name": "FLAME_WHEEL", "type": "Fire", "pw": "60", "duration": "2700", "nrg": "2"},
{"id": "22", "name": "MEGAHORN", "type": "Bug", "pw": "90", "duration": "2200", "nrg": "1"},
{"id": "23", "name": "WING_ATTACK", "type": "Flying", "pw": "", "duration": ""},
{"id": "24", "name": "FLAMETHROWER", "type": "Fire", "pw": "70", "duration": "2200", "nrg": "2"},
{"id": "25", "name": "SUCKER_PUNCH", "type": "Dark", "pw": "", "duration": ""},
{"id": "26", "name": "DIG", "type": "Ground", "pw": "100", "duration": "4700", "nrg": "2"},
{"id": "27", "name": "LOW_KICK", "type": "Fighting", "pw": "", "duration": ""},
{"id": "28", "name": "CROSS_CHOP", "type": "Fighting", "pw": "50", "duration": "1500", "nrg": "2"},
{"id": "29", "name": "PSYCHO_CUT", "type": "Psychic", "pw": "", "duration": ""},
{"id": "30", "name": "PSYBEAM", "type": "Psychic", "pw": "70", "duration": "3200", "nrg": "2"},
{"id": "31", "name": "EARTHQUAKE", "type": "Ground", "pw": "120", "duration": "3600", "nrg": "1"},
{"id": "32", "name": "STONE_EDGE", "type": "Rock", "pw": "100", "duration": "2300", "nrg": "1"},
{"id": "33", "name": "ICE_PUNCH", "type": "Ice", "pw": "50", "duration": "1900", "nrg": "3"},
{"id": "34", "name": "HEART_STAMP", "type": "Psychic", "pw": "40", "duration": "1900", "nrg": "3"},
{"id": "35", "name": "DISCHARGE", "type": "Electric", "pw": "65", "duration": "2500", "nrg": "3"},
{"id": "36", "name": "FLASH_CANNON", "type": "Steel", "pw": "100", "duration": "2700", "nrg": "1"},
{"id": "37", "name": "PECK", "type": "Flying", "pw": "", "duration": ""},
{"id": "38", "name": "DRILL_PECK", "type": "Flying", "pw": "60", "duration": "2300", "nrg": "3"},
{"id": "39", "name": "ICE_BEAM", "type": "Ice", "pw": "90", "duration": "3300", "nrg": "2"},
{"id": "40", "name": "BLIZZARD", "type": "Ice", "pw": "130", "duration": "3100", "nrg": "1"},
{"id": "41", "name": "AIR_SLASH", "type": "", "pw": "", "duration": ""},
{"id": "42", "name": "HEAT_WAVE", "type": "Fire", "pw": "95", "duration": "3000", "nrg": "1"},
{"id": "43", "name": "TWINEEDLE", "type": "", "pw": "", "duration": ""},
{"id": "44", "name": "POISON_JAB", "type": "Poison", "pw": "", "duration": ""},
{"id": "45", "name": "AERIAL_ACE", "type": "Flying", "pw": "55", "duration": "2400", "nrg": "3"},
{"id": "46", "name": "DRILL_RUN", "type": "Ground", "pw": "80", "duration": "2800", "nrg": "2"},
{"id": "47", "name": "PETAL_BLIZZARD", "type": "Grass", "pw": "110", "duration": "2600", "nrg": "1"},
{"id": "48", "name": "MEGA_DRAIN", "type": "Grass", "pw": "25", "duration": "2600", "nrg": "2"},
{"id": "49", "name": "BUG_BUZZ", "type": "Bug", "pw": "90", "duration": "3700", "nrg": "2"},
{"id": "50", "name": "POISON_FANG", "type": "Poison", "pw": "35", "duration": "1700", "nrg": "3"},
{"id": "51", "name": "NIGHT_SLASH", "type": "Dark", "pw": "50", "duration": "2200", "nrg": "3"},
{"id": "52", "name": "SLASH", "type": "", "pw": "", "duration": ""},
{"id": "53", "name": "BUBBLE_BEAM", "type": "Water", "pw": "45", "duration": "1900", "nrg": "3"},
{"id": "54", "name": "SUBMISSION", "type": "Fighting", "pw": "60", "duration": "2200", "nrg": "2"},
{"id": "55", "name": "KARATE_CHOP", "type": "Fighting", "pw": "", "duration": ""},
{"id": "56", "name": "LOW_SWEEP", "type": "Fighting", "pw": "40", "duration": "1900", "nrg": "3"},
{"id": "57", "name": "AQUA_JET", "type": "Water", "pw": "45", "duration": "2600", "nrg": "3"},
{"id": "58", "name": "AQUA_TAIL", "type": "Water", "pw": "50", "duration": "1900", "nrg": "3"},
{"id": "59", "name": "SEED_BOMB", "type": "Grass", "pw": "55", "duration": "2100", "nrg": "3"},
{"id": "60", "name": "PSYSHOCK", "type": "Psychic", "pw": "65", "duration": "2700", "nrg": "3"},
{"id": "61", "name": "ROCK_THROW", "type": "Rock", "pw": "", "duration": ""},
{"id": "62", "name": "ANCIENT_POWER", "type": "Rock", "pw": "70", "duration": "3500", "nrg": "3"},
{"id": "63", "name": "ROCK_TOMB", "type": "Rock", "pw": "70", "duration": "3200", "nrg": "2"},
{"id": "64", "name": "ROCK_SLIDE", "type": "Rock", "pw": "80", "duration": "2700", "nrg": "2"},
{"id": "65", "name": "POWER_GEM", "type": "Rock", "pw": "80", "duration": "2900", "nrg": "2"},
{"id": "66", "name": "SHADOW_SNEAK", "type": "Ghost", "pw": "50", "duration": "2900", "nrg": "3"},
{"id": "67", "name": "SHADOW_PUNCH", "type": "Ghost", "pw": "40", "duration": "1700", "nrg": "3"},
{"id": "68", "name": "SHADOW_CLAW", "type": "Ghost", "pw": "", "duration": ""},
{"id": "69", "name": "OMINOUS_WIND", "type": "Ghost", "pw": "50", "duration": "2300", "nrg": "3"},
{"id": "70", "name": "SHADOW_BALL", "type": "Ghost", "pw": "100", "duration": "3000", "nrg": "2"},
{"id": "71", "name": "BULLET_PUNCH", "type": "Steel", "pw": "", "duration": ""},
{"id": "72", "name": "MAGNET_BOMB", "type": "Steel", "pw": "70", "duration": "2800", "nrg": "3"},
{"id": "73", "name": "STEEL_WING", "type": "Steel", "pw": "", "duration": ""},
{"id": "74", "name": "IRON_HEAD", "type": "Steel", "pw": "60", "duration": "1900", "nrg": "2"},
{"id": "75", "name": "PARABOLIC_CHARGE", "type": "Electric", "pw": "25", "duration": "2800", "nrg": "2"},
{"id": "76", "name": "SPARK", "type": "Electric", "pw": "", "duration": ""},
{"id": "77", "name": "THUNDER_PUNCH", "type": "Electric", "pw": "45", "duration": "1800", "nrg": "3"},
{"id": "78", "name": "THUNDER", "type": "Electric", "pw": "100", "duration": "2400", "nrg": "1"},
{"id": "79", "name": "THUNDERBOLT", "type": "Electric", "pw": "80", "duration": "2500", "nrg": "2"},
{"id": "80", "name": "TWISTER", "type": "Dragon", "pw": "45", "duration": "2800", "nrg": "3"},
{"id": "81", "name": "DRAGON_BREATH", "type": "Dragon", "pw": "", "duration": ""},
{"id": "82", "name": "DRAGON_PULSE", "type": "Dragon", "pw": "90", "duration": "3600", "nrg": "2"},
{"id": "83", "name": "DRAGON_CLAW", "type": "Dragon", "pw": "50", "duration": "1700", "nrg": "3"},
{"id": "84", "name": "DISARMING_VOICE", "type": "Fairy", "pw": "70", "duration": "3900", "nrg": "3"},
{"id": "85", "name": "DRAINING_KISS", "type": "Fairy", "pw": "60", "duration": "2600", "nrg": "2"},
{"id": "86", "name": "DAZZLING_GLEAM", "type": "Fairy", "pw": "100", "duration": "3500", "nrg": "2"},
{"id": "87", "name": "MOONBLAST", "type": "Fairy", "pw": "130", "duration": "3900", "nrg": "1"},
{"id": "88", "name": "PLAY_ROUGH", "type": "Fairy", "pw": "90", "duration": "2900", "nrg": "2"},
{"id": "89", "name": "CROSS_POISON", "type": "Poison", "pw": "40", "duration": "1500", "nrg": "3"},
{"id": "90", "name": "SLUDGE_BOMB", "type": "Poison", "pw": "80", "duration": "2300", "nrg": "2"},
{"id": "91", "name": "SLUDGE_WAVE", "type": "Poison", "pw": "110", "duration": "3200", "nrg": "1"},
{"id": "92", "name": "GUNK_SHOT", "type": "Poison", "pw": "130", "duration": "3100", "nrg": "1"},
{"id": "93", "name": "MUD_SHOT", "type": "Ground", "pw": "", "duration": ""},
{"id": "94", "name": "BONE_CLUB", "type": "Ground", "pw": "40", "duration": "1600", "nrg": "3"},
{"id": "95", "name": "BULLDOZE", "type": "Ground", "pw": "80", "duration": "3500", "nrg": "2"},
{"id": "96", "name": "MUD_BOMB", "type": "Ground", "pw": "55", "duration": "2300", "nrg": "3"},
{"id": "97", "name": "FURY_CUTTER", "type": "Bug", "pw": "", "duration": ""},
{"id": "98", "name": "BUG_BITE", "type": "Bug", "pw": "", "duration": ""},
{"id": "99", "name": "SIGNAL_BEAM", "type": "Bug", "pw": "75", "duration": "2900", "nrg": "2"},
{"id": "100", "name": "X_SCISSOR", "type": "Bug", "pw": "45", "duration": "1600", "nrg": "3"},
{"id": "101", "name": "FLAME_CHARGE", "type": "Fire", "pw": "70", "duration": "3800", "nrg": "3"},
{"id": "102", "name": "FLAME_BURST", "type": "Fire", "pw": "70", "duration": "2600", "nrg": "2"},
{"id": "103", "name": "FIRE_BLAST", "type": "Fire", "pw": "140", "duration": "4200", "nrg": "1"},
{"id": "104", "name": "BRINE", "type": "Water", "pw": "60", "duration": "2300", "nrg": "2"},
{"id": "105", "name": "WATER_PULSE", "type": "Water", "pw": "70", "duration": "3200", "nrg": "2"},
{"id": "106", "name": "SCALD", "type": "Water", "pw": "80", "duration": "3700", "nrg": "2"},
{"id": "107", "name": "HYDRO_PUMP", "type": "Water", "pw": "130", "duration": "3300", "nrg": "1"},
{"id": "108", "name": "PSYCHIC", "type": "Psychic", "pw": "100", "duration": "2800", "nrg": "1"},
{"id": "109", "name": "PSYSTRIKE", "type": "Psychic", "pw": "100", "duration": "4400", "nrg": "2"},
{"id": "110", "name": "ICE_SHARD", "type": "Ice", "pw": "", "duration": ""},
{"id": "111", "name": "ICY_WIND", "type": "Ice", "pw": "60", "duration": "3300", "nrg": "3"},
{"id": "112", "name": "FROST_BREATH", "type": "Ice", "pw": "", "duration": ""},
{"id": "113", "name": "ABSORB", "type": "", "pw": "", "duration": ""},
{"id": "114", "name": "GIGA_DRAIN", "type": "Grass", "pw": "50", "duration": "3900", "nrg": "1"},
{"id": "115", "name": "FIRE_PUNCH", "type": "Fire", "pw": "55", "duration": "2200", "nrg": "3"},
{"id": "116", "name": "SOLAR_BEAM", "type": "Grass", "pw": "180", "duration": "4900", "nrg": "1"},
{"id": "117", "name": "LEAF_BLADE", "type": "Grass", "pw": "70", "duration": "2400", "nrg": "3"},
{"id": "118", "name": "POWER_WHIP", "type": "Grass", "pw": "90", "duration": "2600", "nrg": "2"},
{"id": "119", "name": "SPLASH", "type": "Water", "pw": "", "duration": ""},
{"id": "120", "name": "ACID", "type": "Poison", "pw": "", "duration": ""},
{"id": "121", "name": "AIR_CUTTER", "type": "Flying", "pw": "60", "duration": "2700", "nrg": "2"},
{"id": "122", "name": "HURRICANE", "type": "Flying", "pw": "110", "duration": "2700", "nrg": "1"},
{"id": "123", "name": "BRICK_BREAK", "type": "Fighting", "pw": "40", "duration": "1600", "nrg": "3"},
{"id": "124", "name": "CUT", "type": "Normal", "pw": "", "duration": ""},
{"id": "125", "name": "SWIFT", "type": "Normal", "pw": "60", "duration": "2800", "nrg": "2"},
{"id": "126", "name": "HORN_ATTACK", "type": "Normal", "pw": "40", "duration": "1850", "nrg": "3"},
{"id": "127", "name": "STOMP", "type": "Normal", "pw": "55", "duration": "1700", "nrg": "2"},
{"id": "128", "name": "HEADBUTT", "type": "", "pw": "", "duration": ""},
{"id": "129", "name": "HYPER_FANG", "type": "Normal", "pw": "80", "duration": "2500", "nrg": "2"},
{"id": "130", "name": "SLAM", "type": "", "pw": "", "duration": ""},
{"id": "131", "name": "BODY_SLAM", "type": "Normal", "pw": "50", "duration": "1900", "nrg": "3"},
{"id": "132", "name": "REST", "type": "Normal", "pw": "50", "duration": "1900", "nrg": "3"},
{"id": "133", "name": "STRUGGLE", "type": "Normal", "pw": "35", "duration": "2200", "nrg": "3"},
{"id": "134", "name": "SCALD_BLASTOISE", "type": "Water", "pw": "50", "duration": "4700", "nrg": "1"},
{"id": "135", "name": "HYDRO_PUMP_BLASTOISE", "type": "Water", "pw": "90", "duration": "4500", "nrg": "1"},
{"id": "136", "name": "WRAP_GREEN", "type": "Normal", "pw": "25", "duration": "2900", "nrg": "3"},
{"id": "137", "name": "WRAP_PINK", "type": "Normal", "pw": "25", "duration": "2900", "nrg": "3"},
{"id": "200", "name": "FURY_CUTTER_FAST", "type": "Bug", "pw": "3", "duration": "400", "nrg": "6"},
{"id": "201", "name": "BUG_BITE_FAST", "type": "Bug", "pw": "5", "duration": "500", "nrg": "6"},
{"id": "202", "name": "BITE_FAST", "type": "Dark", "pw": "6", "duration": "500", "nrg": "4"},
{"id": "203", "name": "SUCKER_PUNCH_FAST", "type": "Dark", "pw": "7", "duration": "700", "nrg": "8"},
{"id": "204", "name": "DRAGON_BREATH_FAST", "type": "Dragon", "pw": "6", "duration": "500", "nrg": "4"},
{"id": "205", "name": "THUNDER_SHOCK_FAST", "type": "Electric", "pw": "5", "duration": "600", "nrg": "8"},
{"id": "206", "name": "SPARK_FAST", "type": "Electric", "pw": "6", "duration": "700", "nrg": "9"},
{"id": "207", "name": "LOW_KICK_FAST", "type": "Fighting", "pw": "6", "duration": "600", "nrg": "6"},
{"id": "208", "name": "KARATE_CHOP_FAST", "type": "Fighting", "pw": "8", "duration": "800", "nrg": "10"},
{"id": "209", "name": "EMBER_FAST", "type": "Fire", "pw": "10", "duration": "1000", "nrg": "10"},
{"id": "210", "name": "WING_ATTACK_FAST", "type": "Flying", "pw": "8", "duration": "800", "nrg": "9"},
{"id": "211", "name": "PECK_FAST", "type": "Flying", "pw": "10", "duration": "1000", "nrg": "10"},
{"id": "212", "name": "LICK_FAST", "type": "Ghost", "pw": "5", "duration": "500", "nrg": "6"},
{"id": "213", "name": "SHADOW_CLAW_FAST", "type": "Ghost", "pw": "9", "duration": "700", "nrg": "6"},
{"id": "214", "name": "VINE_WHIP_FAST", "type": "Grass", "pw": "7", "duration": "600", "nrg": "6"},
{"id": "215", "name": "RAZOR_LEAF_FAST", "type": "Grass", "pw": "13", "duration": "1000", "nrg": "7"},
{"id": "216", "name": "MUD_SHOT_FAST", "type": "Ground", "pw": "5", "duration": "600", "nrg": "7"},
{"id": "217", "name": "ICE_SHARD_FAST", "type": "Ice", "pw": "12", "duration": "1200", "nrg": "12"},
{"id": "218", "name": "FROST_BREATH_FAST", "type": "Ice", "pw": "10", "duration": "900", "nrg": "8"},
{"id": "219", "name": "QUICK_ATTACK_FAST", "type": "Normal", "pw": "8", "duration": "800", "nrg": "10"},
{"id": "220", "name": "SCRATCH_FAST", "type": "Normal", "pw": "6", "duration": "500", "nrg": "4"},
{"id": "221", "name": "TACKLE_FAST", "type": "Normal", "pw": "5", "duration": "500", "nrg": "5"},
{"id": "222", "name": "POUND_FAST", "type": "Normal", "pw": "7", "duration": "600", "nrg": "6"},
{"id": "223", "name": "CUT_FAST", "type": "Normal", "pw": "5", "duration": "500", "nrg": "5"},
{"id": "224", "name": "POISON_JAB_FAST", "type": "Poison", "pw": "10", "duration": "800", "nrg": "7"},
{"id": "225", "name": "ACID_FAST", "type": "Poison", "pw": "9", "duration": "800", "nrg": "8"},
{"id": "226", "name": "PSYCHO_CUT_FAST", "type": "Psychic", "pw": "5", "duration": "600", "nrg": "8"},
{"id": "227", "name": "ROCK_THROW_FAST", "type": "Rock", "pw": "12", "duration": "900", "nrg": "7"},
{"id": "228", "name": "METAL_CLAW_FAST", "type": "Steel", "pw": "8", "duration": "700", "nrg": "7"},
{"id": "229", "name": "BULLET_PUNCH_FAST", "type": "Steel", "pw": "9", "duration": "900", "nrg": "10"},
{"id": "230", "name": "WATER_GUN_FAST", "type": "Water", "pw": "5", "duration": "500", "nrg": "5"},
{"id": "231", "name": "SPLASH_FAST", "type": "Water", "pw": "0", "duration": "1730", "nrg": "20"},
{"id": "232", "name": "WATER_GUN_FAST_BLASTOISE", "type": "Water", "pw": "10", "duration": "1000", "nrg": "6"},
{"id": "233", "name": "MUD_SLAP_FAST", "type": "Ground", "pw": "15", "duration": "1400", "nrg": "12"},
{"id": "234", "name": "ZEN_HEADBUTT_FAST", "type": "Psychic", "pw": "12", "duration": "1100", "nrg": "10"},
{"id": "235", "name": "CONFUSION_FAST", "type": "Psychic", "pw": "20", "duration": "1600", "nrg": "15"},
{"id": "236", "name": "POISON_STING_FAST", "type": "Poison", "pw": "5", "duration": "600", "nrg": "7"},
{"id": "237", "name": "BUBBLE_FAST", "type": "Water", "pw": "12", "duration": "1200", "nrg": "14"},
{"id": "238", "name": "FEINT_ATTACK_FAST", "type": "Dark", "pw": "10", "duration": "900", "nrg": "9"},
{"id": "239", "name": "STEEL_WING_FAST", "type": "Steel", "pw": "11", "duration": "800", "nrg": "6"},
{"id": "240", "name": "FIRE_FANG_FAST", "type": "Fire", "pw": "11", "duration": "900", "nrg": "8"},
{"id": "241", "name": "ROCK_SMASH_FAST", "type": "Fighting", "pw": "15", "duration": "1300", "nrg": "10"},
{"id": "242", "name": "TRANSFORM_FAST", "type": "Normal", "pw": "0", "duration": "2230", "nrg": "0"},
{"id": "243", "name": "COUNTER_FAST", "type": "Fighting", "pw": "12", "duration": "900", "nrg": "8"},
{"id": "244", "name": "POWDER_SNOW_FAST", "type": "Ice", "pw": "6", "duration": "1000", "nrg": "15"},
{"id": "245", "name": "CLOSE_COMBAT", "type": "Fighting", "pw": "100", "duration": "2300", "nrg": "1"},
{"id": "246", "name": "DYNAMIC_PUNCH", "type": "Fighting", "pw": "90", "duration": "2700", "nrg": "2"},
{"id": "247", "name": "FOCUS_BLAST", "type": "Fighting", "pw": "140", "duration": "3500", "nrg": "1"},
{"id": "248", "name": "AURORA_BEAM", "type": "Ice", "pw": "80", "duration": "3550", "nrg": "2"},
{"id": "249", "name": "CHARGE_BEAM_FAST", "type": "Electric", "pw": "8", "duration": "1100", "nrg": "15"},
{"id": "250", "name": "VOLT_SWITCH_FAST", "type": "Electric", "pw": "20", "duration": "2300", "nrg": "25"},
{"id": "251", "name": "WILD_CHARGE", "type": "Electric", "pw": "90", "duration": "2600", "nrg": "2"},
{"id": "252", "name": "ZAP_CANNON", "type": "Electric", "pw": "140", "duration": "3700", "nrg": "1"},
{"id": "253", "name": "DRAGON_TAIL_FAST", "type": "Dragon", "pw": "15", "duration": "1100", "nrg": "9"},
{"id": "254", "name": "AVALANCHE", "type": "Ice", "pw": "90", "duration": "2700", "nrg": "2"},
{"id": "255", "name": "AIR_SLASH_FAST", "type": "Flying", "pw": "14", "duration": "1200", "nrg": "10"},
{"id": "256", "name": "BRAVE_BIRD", "type": "Flying", "pw": "90", "duration": "2000", "nrg": "1"},
{"id": "257", "name": "SKY_ATTACK", "type": "Flying", "pw": "70", "duration": "2000", "nrg": "2"},
{"id": "258", "name": "SAND_TOMB", "type": "Ground", "pw": "80", "duration": "4000", "nrg": "2"},
{"id": "259", "name": "ROCK_BLAST", "type": "Rock", "pw": "50", "duration": "2100", "nrg": "3"},
{"id": "260", "name": "INFESTATION_FAST", "type": "Bug", "pw": "10", "duration": "1100", "nrg": "14"},
{"id": "261", "name": "STRUGGLE_BUG_FAST", "type": "Bug", "pw": "15", "duration": "1500", "nrg": "15"},
{"id": "262", "name": "SILVER_WIND", "type": "Bug", "pw": "70", "duration": "3700", "nrg": "3"},
{"id": "263", "name": "ASTONISH_FAST", "type": "Ghost", "pw": "8", "duration": "1100", "nrg": "14"},
{"id": "264", "name": "HEX_FAST", "type": "Ghost", "pw": "10", "duration": "1200", "nrg": "15"},
{"id": "265", "name": "NIGHT_SHADE", "type": "Ghost", "pw": "60", "duration": "2600", "nrg": "2"},
{"id": "266", "name": "IRON_TAIL_FAST", "type": "Steel", "pw": "15", "duration": "1100", "nrg": "7"},
{"id": "267", "name": "GYRO_BALL", "type": "Steel", "pw": "80", "duration": "3300", "nrg": "2"},
{"id": "268", "name": "HEAVY_SLAM", "type": "Steel", "pw": "70", "duration": "2100", "nrg": "2"},
{"id": "269", "name": "FIRE_SPIN_FAST", "type": "Fire", "pw": "14", "duration": "1100", "nrg": "10"},
{"id": "270", "name": "OVERHEAT", "type": "Fire", "pw": "160", "duration": "4000", "nrg": "1"},
{"id": "271", "name": "BULLET_SEED_FAST", "type": "Grass", "pw": "8", "duration": "1100", "nrg": "14"},
{"id": "272", "name": "GRASS_KNOT", "type": "Grass", "pw": "90", "duration": "2600", "nrg": "2"},
{"id": "273", "name": "ENERGY_BALL", "type": "Grass", "pw": "90", "duration": "3900", "nrg": "2"},
{"id": "274", "name": "EXTRASENSORY_FAST", "type": "Psychic", "pw": "12", "duration": "1100", "nrg": "12"},
{"id": "275", "name": "FUTURESIGHT", "type": "Psychic", "pw": "120", "duration": "2700", "nrg": "1"},
{"id": "276", "name": "MIRROR_COAT", "type": "Psychic", "pw": "60", "duration": "2600", "nrg": "2"},
{"id": "277", "name": "OUTRAGE", "type": "Dragon", "pw": "110", "duration": "3900", "nrg": "2"},
{"id": "278", "name": "SNARL_FAST", "type": "Dark", "pw": "12", "duration": "1100", "nrg": "12"},
{"id": "279", "name": "CRUNCH", "type": "Dark", "pw": "70", "duration": "3200", "nrg": "3"},
{"id": "280", "name": "FOUL_PLAY", "type": "Dark", "pw": "70", "duration": "2000", "nrg": "2"},
{"id": "281", "name": "HIDDEN_POWER_FAST", "type": "Normal", "pw": "15", "duration": "1500", "nrg": "15"}
];
export const CpM = {
	'0.0939999967813492': '1', '0.135137432089339': '1.5', '0.166397869586945': '2', '0.192650913155325': '2.5',
	'0.215732470154762': '3', '0.236572651424822': '3.5', '0.255720049142838': '4', '0.273530372106572': '4.5',
	'0.290249884128571': '5', '0.306057381389863': '5.5', '0.321087598800659': '6', '0.335445031996451': '6.5',
	'0.349212676286697': '7', '0.3624577522277832': '7.5', '0.37523558735847473': '8', '0.387592407713878': '8.5',
	'0.39956727623939514': '9', '0.4111935532161': '9.5', '0.42250001430511475': '10', '0.432926420512509': '10.5',
	'0.443107545375824': '11', '0.453059948165049': '11.5', '0.46279838681221': '12', '0.472336085311278': '12.5',
	'0.48168495297431946': '13', '0.490855807179549': '13.5', '0.49985843896865845': '14', '0.5087017489616': '14.5',
	'0.517393946647644': '15', '0.525942516110322': '15.5', '0.534354329109192': '16', '0.542635753803599': '16.5', 
	'0.550792694091797': '17', '0.558830584490385': '17.5', '0.566754519939423': '18', '0.57456912814537': '18.5',
	'0.582278907299042': '19', '0.589887907888945': '19.5', '0.597400009632111': '20', '0.604823648665171': '20.5',
	'0.61215728521347': '21', '0.619404107958234': '21.5', '0.626567125320435': '22', '0.633649178748576': '22.5',
	'0.6406529545784': '23', '0.647580971386554': '23.5', '0.654435634613037': '24', '0.661219265805859': '24.5',
	'0.667934000492096': '25', '0.674581885647492': '25.5', '0.681164920330048': '26', '0.687684901255373': '26.5',
	'0.694143652915955': '27', '0.700542901033063': '27.5', '0.706884205341339': '28', '0.713169074873823': '28.5',
	'0.719399094581604': '29', '0.725575586915154': '29.5', '0.731700003147125': '30', '0.734741038550429': '30.5',
	'0.737769484519958': '31', '0.740785579737136': '31.5', '0.743789434432983': '32', '0.746781197247765': '32.5',
	'0.749761044979095': '33', '0.752729099732281': '33.5', '0.75568550825119': '34', '0.758630370209851': '34.5',
	'0.761563837528229': '35', '0.76448604959218': '35.5', '0.767397165298462': '36', '0.770297293677362': '36.5',
	'0.773186504840851': '37', '0.776064947064992': '37.5', '0.778932750225067': '38', '0.781790050767666': '38.5',
	'0.784636974334717': '39', '0.787473608513275': '39.5', '0.790300011634827': '40'};

export function getMoveName(id) {
  for(var i = 0; i < moves.length; i++) {
    if( moves[i].id == id )
      return moves[i].name.split('_FAST').join('+').split('_').join('').concat('(' + moves[i].dps + ')');
  }

  return "N/A";
}
export function getFastMoveWithDPS(id, type) {
	for(var i = 0; i < moves.length; i++) {
    if( moves[i].id == id ) {
			var returnString = moves[i].name.split('_FAST').join('').split('_').join(''),
				dps = parseFloat((moves[i].pw * 1000 / moves[i].duration).toFixed(3)),
				typeArray = type.split(' / '),
				nrg = moves[i].nrg;
			if (typeArray.indexOf(moves[i].type) !== -1) {
				dps = parseFloat((moves[i].pw * 1.25 * 1000 / moves[i].duration).toFixed(3));
			}
			if (moves[i].nrg && moves[i].name.indexOf('_FAST') !== -1) {
				nrg = parseFloat((moves[i].nrg * 1000 / moves[i].duration).toFixed(2));
			}
			return returnString+'('+dps.toString()+') *' + nrg.toString();
		}
	}
	return "UNK";
}
export function getLevel(cp, acp) {
	var tcp = (cp+acp).toString().slice(0,8);
	for (var key in CpM) {
		if (CpM.hasOwnProperty(key)) {
			if (key.startsWith(tcp)) {
				return CpM[key];
			}
		}
	}
	return tcp;
}