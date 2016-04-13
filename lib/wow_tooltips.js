var items = {};
var itemextendedcosts = {};

var wow_quality = {
    0: "trash",
    1: "common",
    2: "uncommon",
    3: "rare",
    4: "epic",
    5: "legendary",
};

var wow_bonding = {
    1: "Binds when picked up",
    2: "Binds when equipped",
    3: "Binds when used",
    4: "Quest item",
    5: "Quest item",
};

var wow_inventorytype = {
    1: "Head",
    2: "Neck",
    3: "Shoulder",
    4: "Shirt",
    5: "Chest",
    6: "Waist",
    7: "Legs",
    8: "Feet",
    9: "Wrists",
    10: "Hands",
    11: "Finger",
    12: "Trinket",
    13: "Weapon",
    14: "Shield",
    15: "Bow",
    16: "Back",
    17: "Two-Hand",
    18: "Bag",
    19: "Tabard",
    20: "Robe",
    21: "Main hand",    
    22: "Off hand",    
    23: "Tome",    
    24: "Ammo",
    25: "Thrown",
    26: "Wands & Guns",
    27: "Quiver",
    28: "Relic",
}

var wow_class_subclass = {
    0: {    0:"Consumable",
            1:"Potion",
            2:"Elixir",
            3:"Flask",
            4:"Scroll",
            5:"Food & Drink",
            6:"Item Enhancement",
            7:"Bandage",
            8:"Other"},
    1:  {   0:"Bag",
            1:"Soul Bag",
            2:"Herb Bag",
            3:"Enchanting Bag",
            4:"Engineering Bag", 
            5:"Gem Bag",
            6:"Mining Bag",
            7:"Leatherworking Bag",
            8:"Inscription Bag"},
    2:  {   0:"Axe",//one handed
            1:"Axe",//two handed
            2:"Bow",
            3:"Gun",
            4:"Mace",//one handed
            5:"Mace",//two handed
            6:"Polearm",
            7:"Sword",//one handed
            8:"Sword",//two handed
            9:"Obsolete",
            10:"Staff",
            11:"Exotic",
            13:"Fist Weapon",
            14:"Miscellaneous",//Blacksmith Hammer, Mining Pick, etc.
            15:"Dagger",
            16:"Thrown",
            17:"Spear",
            18:"Crossbow",
            19:"Wand",
            20:"Fishing Pole"},
    3:  {   0:"Red",
            1:"Blue",
            2:"Yellow",
            3:"Purple",
            4:"Green",
            5:"Orange",
            6:"Meta",
            7:"Simple",
            8:"Prismatic"},
    4:  {   0:"Miscellaneous",
            1:"Cloth",
            2:"Leather",
            3:"Mail",
            4:"Plate",
            5:"Buckler(OBSOLETE)",
            6:"Shield",
            7:"Libram",
            8:"Idol",
            9:"Totem",
            10:"Sigil"},
    5:  {   0:"Reagent"},
    6:  {   0:"Wand(OBSOLETE)",
            1:"Bolt(OBSOLETE)",
            2:"Arrow",
            3:"Bullet",
            4:"Thrown(OBSOLETE)"},
    7:  {   0:"Trade Goods",
            1:"Parts",
            2:"Explosives",
            3:"Devices",
            4:"Jewelcrafting",
            5:"Cloth",
            6:"Leather",
            7:"Metal & Stone",
            8:"Meat",
            9:"Herb",
            10:"Elemental",
            11:"Other",
            12:"Enchanting",
            13:"Materials",
            14:"Armor Enchantment",
            15:"Weapon Enchantment"},
    8:  {   0:"Generic(OBSOLETE)"},
    9:  {   0:"Book",
            1:"Leatherworking",
            2:"Tailoring",
            3:"Engineering",
            4:"Blacksmithing",
            5:"Cooking",
            6:"Alchemy",
            7:"First Aid",
            8:"Enchanting",
            9:"Fishing",
            10:"Jewelcrafting"},
    10: {   0:"Money(OBSOLETE)"},
    11: {   0:"Quiver(OBSOLETE)",
            1:"Quiver(OBSOLETE)",
            2:"Quiver",
            3:"Ammo Pouch"},
    12: {   0:"Quest"},
    13: {   0:"Key",
            1:"Lockpick"},
    14: {   0:"Permanent"},
    15: {   0:"Junk",
            1:"Reagent",
            2:"Pet",
            3:"Holiday",
            4:"Other",
            5:"Mount"},
    16: {   1:"Warrior",
            2:"Paladin",
            3:"Hunter",
            4:"Rogue",
            5:"Priest",
            6:"Death Knight",
            7:"Shaman",
            8:"Mage",
            9:"Warlock",
            11:"Druid"}
}
var wow_socketcolor = {
    1: "Meta",
    2: "Red",
    4: "Yellow",
    8: "Blue",
}
var wow_socketbonus = {
    3312: "+8 Strength",
    3313: "+8 Agility",
    3305: "+12 Stamina",
    3353: "+8 Intellect",
    
    2900: "+4 Spell Power",
    2872: "+5 Spell Power",
    2889: "+5 Spell Power",
    3198: "+5 Spell Power",
    3596: "+5 Spell Power",
    3752: "+5 Spell Power",
    428: "+7 Spell Power",
    2770: "+7 Spell Power",
    3602: "+7 Spell Power",
    430: "+9 Spell Power",
    440: "+9 Spell Power",
    2314: "+9 Spell Power",
    3753: "+9 Spell Power",
    3114: "+4 Attack Power",
    2936: "+8 Attack Power",
    1587: "+8 Attack Power",
    3356: "+8 Attack Power",
    3764: "+12 Attack Power",
    3877: "+12 Attack Power",
    1589: "+16 Attack Power",
    1597: "+32 Attack Power",
 /*
2895": stats.Stamina += 4; break;
2868":
2882": stats.Stamina += 6; break;
1886":
3307": stats.Stamina += 9; break;
3354":
3305":
3766": stats.Stamina += 12; break;
4154": stats.Stamina += 15; break;
4134": stats.Stamina += 30; break;
4159": stats.Stamina += 45; break;
 #endregion
 #region Mp5
2367":
2865":
3306": stats.Mp5 += 2; break;
2370":
2854": stats.Mp5 += 3; break;
2371": stats.Mp5 += 4; break;
 #endregion
 #region Hit Rating
2873":
2908": stats.HitRating += 4; break;
3351": stats.HitRating += 6; break;
2767":
2844": stats.HitRating += 8; break;
4160": stats.HitRating += 10; break;
 //case "": stats.HitRating += 20; break;
 //case "": stats.HitRating += 30; break;
 #endregion
 #region Crit Rating*/
    2887: "+3 Critical Strike",
    3204: "+3 Critical Strike",
    2864: "+4 Critical Strike",
    2874: "+4 Critical Strike",
    2951: "+4 Critical Strike",
    2952: "+4 Critical Strike",
    3263: "+4 Critical Strike",
    3301: "+6 Critical Strike",
    3316: "+6 Critical Strike",
    2771: "+8 Critical Strike",
    2787: "+8 Critical Strike",
    2843: "+8 Critical Strike",
    3314: "+8 Critical Strike",
    4151: "+10 Critical Strike",
    4152: "+20 Critical Strike",
    4153: "+30 Critical Strike",
/*
 #region Spirit
2890": stats.Spirit += 4; break;
3311": stats.Spirit += 6; break;
2842":
3352": stats.Spirit += 8; break;
4142": stats.Spirit += 10; break;
4129": stats.Spirit += 20; break;
4125": stats.Spirit += 30; break;
 #endregion
 #region Intellect
2869": stats.Intellect += 4; break;
3310": stats.Intellect += 6; break;
3353": stats.Intellect += 8; break;
4143": stats.Intellect += 10; break;
4144": stats.Intellect += 20; break;
4150": stats.Intellect += 30; break;
 #endregion
 #region Dodge Rating
2871": stats.DodgeRating += 4; break;
3358": stats.DodgeRating += 6; break;
3304": stats.DodgeRating += 8; break;
 //case "": stats.DodgeRating += 10; break;
 //case "": stats.DodgeRating += 20; break;
 //case "": stats.DodgeRating += 30; break;
 #endregion
 #region Agility
3149": stats.Agility += 2; break;
2877": stats.Agility += 4; break;
3355": stats.Agility += 6; break;
3313": stats.Agility += 8; break;
2782": stats.Agility += 10; break;
4133": stats.Agility += 20; break;
4145": stats.Agility += 30; break;
 #endregion
 #region Resilience
2878": stats.Resilience += 4; break;
3600": stats.Resilience += 6; break;
3821": stats.Resilience += 8; break;
4184": stats.Resilience += 10; break;
4185": stats.Resilience += 20; break;
4186": stats.Resilience += 30; break;
 #endregion
 #region Strength
2892": stats.Strength += 4; break;
2927": stats.Strength += 4; break;
3312": stats.Strength += 8; break;
3357": stats.Strength += 6; break;
4135": stats.Strength += 10; break;
4136": stats.Strength += 20; break;
4158": stats.Strength += 30; break;
 #endregion
 #region Block Rating
2972": stats.BlockRating += 4; break;
3361": stats.BlockRating += 6; break;
 #endregion
 #region Haste Rating
3267":
3308": stats.HasteRating += 4; break;
3309": stats.HasteRating += 6; break;
2963":
3303": stats.HasteRating += 8; break;
4146": stats.HasteRating += 10; break;
4140": stats.HasteRating += 20; break;
4128": stats.HasteRating += 30; break;
 #endregion
 #region Expertise Rating
3094": stats.ExpertiseRating += 4; break;
3362": stats.ExpertiseRating += 6; break;
3778": stats.ExpertiseRating += 8; break;
 //case "": stats.ExpertiseRating += 10; break;
 //case "": stats.ExpertiseRating += 20; break;
 //case "": stats.ExpertiseRating += 30; break;
 #endregion
 #region Parry Rating
3359": stats.ParryRating += 4; break;
3871": stats.ParryRating += 6; break;
3360": stats.ParryRating += 8; break;
4147": stats.ParryRating += 10; break;
4139": stats.ParryRating += 20; break;
 //case "": stats.ParryRating += 30; break;
 #endregion
 #region Mastery Rating
4123": stats.MasteryRating += 10; break;
4137": stats.MasteryRating += 20; break;
4138": stats.MasteryRating += 30; break;*/
}

var wow_statstype = {
    0: "Mana",
    1: "Health",
    3: "Agility",
    4: "Strength",
    5: "Intellect",
    6: "Spirit",
    7: "Stamina",
    12: "Defense Rating",
    13: "Dodge Rating",
    14: "Parry Rating",
    15: "Block Rating",
    16: "Hit Rating",
    17: "Hit Rating",
    18: "Spell Hit Rating",
    19: "Critical Rating",
    20: "Critical Rating",
    21: "Spell Critical Rating",
    22: "Hit Taken Meele Rating",
    23: "Hit Taken Ranged Rating",
    24: "Hit Taken Spell Rating",
    25: "Crit Taken Meele Rating",
    26: "Crit Taken Ranged Rating",
    27: "Crit Taken Spell Rating",
    28: "Haste Rating",
    29: "Haste Rating",
    30: "Spell Haste Rating",
    31: "Hit Rating",
    32: "Critical Rating",
    33: "Hit Taken Rating",
    34: "Crit Taken Rating",
    35: "Resilence Rating",
    36: "Haste Rating",
    37: "Expertise Rating",
    38: "Attack Power",
    39: "Attack Power",
    40: "Feral Attack Power",
    41: "Healing Done",
    42: "Spell Damage",
    43: "Mana per 5 sec",
    44: "Armor Penetration Rating",
    45: "Spell Power",
    46: "health per 5 sec",
    47: "Spell Penetration",
    48: "Blockvalue"
}

var wow_spelltrigger = {
    0: "Use",
    1: "On Equip",
    2: "Chance on Hit",
    4: "Soulstone",
    5: "Use",
    6: "Learn"
}

function wow_tooltips(){
    Handlebars.registerHelper("speed", function( speed ) {
      return speed.toFixed(2);
    });

    Handlebars.registerHelper("dps", function( damage ) {
      var damageTotal = damage.max + damage.min;
      if( damage.extras ) {
        for( var i = 0; i < damage.extras.min.length; i++ ) {
          damageTotal += damage.extras.min[i];
        }
        for( var i = 0; i < damage.extras.max.length; i++ ) {
          damageTotal += damage.extras.max[i];
        }
      }
      return ((damageTotal/2) / damage.speed).toFixed(1);
    });

    Handlebars.registerHelper("classes", function( array ) {
      var classes = array.toString().replace(/\s/g,"&nbsp;").replace(/,/g,", ");
      return new Handlebars.SafeString( classes );
    });

    //item hover
    var source = $("#wow-item-template").html();
    var template_item = Handlebars.compile(source);
    var source = $("#wow-itemextendedcost-template").html();
    var template_itemextendedcost = Handlebars.compile(source);
    var $body = $("body");
    var $wowIcons = $(".wow-icon");
    var lastHovered;

    $wowIcons.each(function(k,v) {
        var $this = $(this);
        var item_id = $this.data("item-id");
        var itemextendedcost_id = $this.data("itemextendedcost-id");
        if (typeof item_id !== "undefined") {
            wow_tooltips_item(item_id,$this);
        } else if(typeof itemextendedcost_id !== "undefined"){
            wow_tooltips_itemextendedcost(itemextendedcost_id,$this);}
    });

    $wowIcons.on("mouseover.wow", function(e) {
      var $this = $(this);
      var $html;

      if( !lastHovered || !lastHovered.is( $this ) ) {

        var item_id = $this.data("item-id");
        var itemextendedcost_id = $this.data("itemextendedcost-id");
        if (typeof item_id !== "undefined") {
            $html = $( template_item(items[item_id]) );
        } else if(typeof itemextendedcost_id !== "undefined"){
            $html = $( template_itemextendedcost(itemextendedcosts[itemextendedcost_id]) );}

        $body.find(".wow-item").remove();
        $body.append( $html );

        $html.css({
          left: e.pageX + 20,
          top: e.pageY - 10 - $(window).scrollTop()
        });

        lastHovered = $this;

      } else {
        $html = $(".wow-item");
      }

      setTimeout(function() {
        $html.removeClass("hidden");
      },10);

      $this.on("mousemove.wow", function(e) {
        $html.css({
          left: e.pageX + 20,
          top: e.pageY - 30 - $(window).scrollTop()
        });
      });

    });

    $wowIcons.on("mouseout.wow",function(e) {
      $body.find(".wow-item").addClass("hidden");
      $(this).off("mousemove.wow");
    });

    //$body.on("mouseover.wow", ".wow-item" , function(e) {
      //$(this).removeClass("hidden");
    //});

    $body.on("mouseout.wow", ".wow-item" , function(e) {
      $(this).addClass("hidden");
    });
}

function wow_tooltips_itemextendedcost(id,$this){
    if(id <= 0){
        return;}
    $.getJSON('./api.php?call=tbc&action=itemextendedcost&id='+id,function(json){
        if(!json || json.status !== true || !json.result){
            return;}
        
        itemextendedcosts[json.result.entry] = json.result;
        if( json.result.icon ) {
            $this.css({"background-image": "url(http://wow.zamimg.com/images/wow/icons/medium/"+ json.result.icon +".jpg)"});
        }
        if( json.result.stack ) {
            $this.append("<span class='stack'>"+json.result.stack+"</span>");}
    });
}

function wow_tooltips_item(id,$this){
    if(id <= 0){
        return;}
    $.getJSON('./api.php?call=tbc&action=item&id='+id,function(json){
        if(!json || json.status !== true || !json.result){
            return;}

        //Quality strings
        json.result.quality = wow_quality[json.result.Quality];

        //bonding
        json.result.binds = wow_bonding[json.result.bonding];

        //Inventory Type
        json.result.slot = wow_inventorytype[json.result.InventoryType];

        //class & subclass
        json.result.type = wow_class_subclass[json.result.class][json.result.subclass];

        //flags
        json.result.unique = json.result.flags % 524288 === 0 ?  'true' : 'false';

        //dmg
        if(json.result.dmg_min1 > 0 || json.result.dmg_max1 > 0){
            json.result.damage = {  min: json.result.dmg_min1,
                                    max: json.result.dmg_max1,
                                    speed: json.result.delay / 1000}
        }

        //stats
        json.result.stats = {};
        if(json.result.stat_type1 !== 0){
            json.result.stats[0] = {stat: wow_statstype[json.result.stat_type1], value: json.result.stat_value1, type: json.result.stat_type1 <= 7 ? "primary" : "secondary" };}
        if(json.result.stat_type2 !== 0){
            json.result.stats[1] = {stat: wow_statstype[json.result.stat_type2], value: json.result.stat_value2, type: json.result.stat_type2 <= 7 ? "primary" : "secondary" };}
        if(json.result.stat_type3 !== 0){
            json.result.stats[2] = {stat: wow_statstype[json.result.stat_type3], value: json.result.stat_value3, type: json.result.stat_type3 <= 7 ? "primary" : "secondary" };}
        if(json.result.stat_type4 !== 0){
            json.result.stats[3] = {stat: wow_statstype[json.result.stat_type4], value: json.result.stat_value4, type: json.result.stat_type4 <= 7 ? "primary" : "secondary" };}
        if(json.result.stat_type5 !== 0){
            json.result.stats[4] = {stat: wow_statstype[json.result.stat_type5], value: json.result.stat_value5, type: json.result.stat_type5 <= 7 ? "primary" : "secondary" };}
        if(json.result.stat_type6 !== 0){
            json.result.stats[5] = {stat: wow_statstype[json.result.stat_type6], value: json.result.stat_value6, type: json.result.stat_type6 <= 7 ? "primary" : "secondary" };}
        if(json.result.stat_type7 !== 0){
            json.result.stats[6] = {stat: wow_statstype[json.result.stat_type7], value: json.result.stat_value7, type: json.result.stat_type7 <= 7 ? "primary" : "secondary" };}
        if(json.result.stat_type8 !== 0){
            json.result.stats[7] = {stat: wow_statstype[json.result.stat_type8], value: json.result.stat_value8, type: json.result.stat_type8 <= 7 ? "primary" : "secondary" };}
        if(json.result.stat_type9 !== 0){
            json.result.stats[8] = {stat: wow_statstype[json.result.stat_type9], value: json.result.stat_value9, type: json.result.stat_type9 <= 7 ? "primary" : "secondary" };}
        if(json.result.stat_type10 !== 0){
            json.result.stats[9] = {stat: wow_statstype[json.result.stat_type10], value: json.result.stat_value10, type: json.result.stat_type10 <= 7 ? "primary" : "secondary" };}

        json.result.enchantments = {};
        //socket
        json.result.enchantments.sockets = {};
        if(json.result.socketColor_1 !== 0){
            json.result.enchantments.sockets[0] = {color: wow_socketcolor[json.result.socketColor_1]};}
        if(json.result.socketColor_2 !== 0){
            json.result.enchantments.sockets[1] = {color: wow_socketcolor[json.result.socketColor_2]};}
        if(json.result.socketColor_3 !== 0){
            json.result.enchantments.sockets[2] = {color: wow_socketcolor[json.result.socketColor_3]};}

        json.result.enchantments.socketBonus = wow_socketbonus[json.result.socketBonus];

        //Classes
        json.result.classes = [];
        if(json.result.AllowableClass !== -1){
            if(json.result.AllowableClass % 1 === 0){
                json.result.classes.push("Warrior");}
            if(json.result.AllowableClass % 2 === 0){
                json.result.classes.push("Paladin");}
            if(json.result.AllowableClass % 4 === 0){
                json.result.classes.push("Hunter");}
            if(json.result.AllowableClass % 8 === 0){
                json.result.classes.push("Rogue");}
            if(json.result.AllowableClass % 16 === 0){
                json.result.classes.push("Priest");}
            if(json.result.AllowableClass % 32 === 0){
                json.result.classes.push("Death Knight");}
            if(json.result.AllowableClass % 64 === 0){
                json.result.classes.push("Shaman");}
            if(json.result.AllowableClass % 128 === 0){
                json.result.classes.push("Mage");}
            if(json.result.AllowableClass % 256 === 0){
                json.result.classes.push("Warlock");}
            if(json.result.AllowableClass % 512 === 0){
                json.result.classes.push("Monk");}
            if(json.result.AllowableClass % 1024 === 0){
                json.result.classes.push("Druid");}
        }

        //Set

        //spells
        json.result.bonuses = [];
        if(json.result.spellid_1 !== 0){
            json.result.bonuses[0] = {description: wow_spelltrigger[json.result.spelltrigger_1]+': '+json.result.spelltext_1};}
        if(json.result.spellid_2 !== 0){
            json.result.bonuses[1] = {description: wow_spelltrigger[json.result.spelltrigger_2]+': '+json.result.spelltext_2};}
        if(json.result.spellid_3 !== 0){
            json.result.bonuses[2] = {description: wow_spelltrigger[json.result.spelltrigger_3]+': '+json.result.spelltext_3};}
        if(json.result.spellid_4 !== 0){
            json.result.bonuses[3] = {description: wow_spelltrigger[json.result.spelltrigger_4]+': '+json.result.spelltext_4};}
        if(json.result.spellid_5 !== 0){
            json.result.bonuses[4] = {description: wow_spelltrigger[json.result.spelltrigger_5]+': '+json.result.spelltext_5};}

        //Price
        var sp = json.result.SellPrice;
        if(sp / 10000 >= 1){
            json.result.price_gold = Math.floor(sp / 10000);
            sp = sp % 10000;}
        if(sp / 100 >= 1){
            json.result.price_silver = Math.floor(sp / 100);
            sp = sp % 100;}
        if(sp => 1){
            json.result.price_copper = sp;}

        items[json.result.entry] = json.result;
        if( json.result.icon ) {
            $this.css({"background-image": "url(http://wow.zamimg.com/images/wow/icons/medium/"+ json.result.icon +".jpg)"});
        }
        if( json.result.stack ) {
            $this.append("<span class='stack'>"+json.result.stack+"</span>");}
    });
}



/*var example = {
  
  // most values can be left blank
  // or omitted if they aren't needed.
  
  "example": {
    
    icon: "icon_name"
    quality: "trash",
    name: "Example Tooltip",
    binds: "when picked up",
    unique: true,
    slot: "Two-Hand",
    type: "Axe",

    damage: {
      min: 25,
      max: 39,
      // extras is for stuff like additional fire dmg
      extras: {
        min: [],
        max: []
      },
      speed: 2.50
    },
    
    stats: [
      { stat: "Agility", value: 4, type: "primary" },
      { stat: "Stamina", value: 4, type: "primary" },
      { stat: "Hit", value: 4, type: "secondary" },
      { stat: "Haste", value: 4, type: "secondary" }
    ],

    enchantments: {

      enchants: [
        { description: "Flametongue" }
      ],

      sockets: [
        { color: "red" },
        { color: "blue" },
        { color: "yellow" },
        { color: "meta" },
        { color: "prismatic" }
      ],
      
      socketBonus: "+12 Haste"

    },

    durability: 65,

    chanceOnHit: [
      { description: "Strike an enemy for an additional 2 fire damage." },
      { description: "Explode." }
    ],

    classes: [ "Warrior", "Paladin", "Death Knight" ],

    level: 14,
    ilevel: 19,

    bonuses: [
      { description: "Equip: Increases your PVP Power by 10." },
      { description: "Use: Summon a basilisk as a buddy for 10 seconds." }
    ]

  }

};*/