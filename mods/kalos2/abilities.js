exports.BattleAbilities = {
        "honeygather": {
                desc: "When this Pokemon is holding Honey, its attacks do 1.25x damage.",
                shortDesc: "When this Pokemon is holding Honey, its attacks do 1.25x damage.",
                onModifyAtkPriority: 5,
                onModifyAtk: function(atk, attacker, defender, move) {
                        if (attacker.item.id === 'honey') {
                                this.debug('Honey boost');
                                return this.chainModify(1.25);
                        }
                },
                id: "honeygather",
                name: "Honey Gather",
                rating: 0,
                num: 118
        },
        "corrosivepoison": {
                desc: "This Pokemon has the ability to hit Steel-type Pokemon super effectively with Poison-type moves. Effectiveness of these moves takes into account the Steel-type Pokemon's other weaknesses and resistances.",
                shortDesc: "This Pokemon can hit Steel-types super effectively with Poison-type moves.",               
                onModifyMove: function(move) {
                        if (move.type in {'Poison':1}) {
                                move.affectedByImmunities = false;
                        }
                },
                onModifyDamage: function(damage, source, target, move) {
                        if (target.type === 'Steel' && move.type === 'Poison') {
                                this.debug('Corrosive Poison effectiveness mod');
                                var typeMod = this.getEffectiveness('Poison', target);
                                typeMod = typeMod + 1;
                        }
                },
		id: "corrosivepoison",
		name: "Corrosive Poison",
		rating: 3,
		num: -113
	},
	"dimensionwarp": {
		desc: "When this Pokemon enters the battlefield, Trick Room is set up (for 7 turns).",
		shortDesc: "On switch-in, Trick Room is set up.",
		onStart: function(source) {
				this.addPseudoWeather('trickroom');
		},
		id: "dimensionwarp",
		name: "Dimension Warp",
		rating: 5,
		num: -70
	},
	"snowslide": {
		desc: "This Pokemon's Speed is doubled if the weather is Hail. This Pokemon is also immune to residual Hail damage.",
		shortDesc: "If Hail is active, this Pokemon's Speed is doubled; immunity to Hail.",
		onModifySpe: function(speMod, pokemon) {
			if (this.isWeather('hail')) {
				return this.chain(speMod, 2);
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
		},
		id: "snowlide",
		name: "Snow Slide",
		rating: 2,
		num: -146
	},	
        "ironfist": {
                desc: "This Pokemon receives a 30% power boost for the following attacks: Bullet Punch, Comet Punch, Dizzy Punch, Drain Punch, Dynamicpunch, Fire Punch, Focus Punch, Hammer Arm, Ice Punch, Mach Punch, Mega Punch, Meteor Mash, Shadow Punch, Sky Uppercut, and Thunderpunch. Sucker Punch, which is known Ambush in Japan, is not boosted.",
                shortDesc: "This Pokemon's punch-based attacks do 1.3x damage. Sucker Punch is not boosted.",
                onBasePowerPriority: 8,
                onBasePower: function(basePower, attacker, defender, move) {
                        if (move.isPunchAttack) {
                                this.debug('Iron Fist boost');
                                return this.chainModify(1.3);
                        }
                },
                id: "ironfist",
                name: "Iron Fist",
                rating: 3,
                num: 89
        },
	"windspeed": {
		desc: "When this Pokemon enters the battlefield, the weather becomes Tornado (for 5 turns normally, or 8 turns while holding Gale Feather).",
		shortDesc: "On switch-in, the weather becomes Tornado.",
		onStart: function(source) {
			this.setWeather('tornado');
		},
		id: "windspeed",
		name: "Wind Speed",
		rating: 5,
		num: -222
	},		
        "burstingjets": {
                desc: "Raises the user's Speed stat by two stages when a stat is lowered, including the Speed stat. This does not include self-induced stat drops like those from Close Combat. This Pokemon also cannot become paralyzed.",
                shortDesc: "This Pokemon's Speed is boosted by 2 for each of its stats that is lowered by a foe. This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it.",
                onAfterEachBoost: function(boost, target, source) {
                        if (!source || target.side === source.side) {
                                return;
                        }
                        var statsLowered = false;
                        for (var i in boost) {
                                if (boost[i] < 0) {
                                        statsLowered = true;
                                }
                        }
                        if (statsLowered) {
                                this.boost({spe: 2});
                        }
                },
                onUpdate: function(pokemon) {
                        if (pokemon.status === 'par') {
                                pokemon.cureStatus();
                        }
                },
                onImmunity: function(type, pokemon) {
                        if (type === 'par') return false;
                },
                id: "burstingjets",
                name: "Bursting Jets",
                rating: 2,
                num: -5
        },
        "defiant": {
                desc: "Raises the user's Attack stat by two stages when a stat is lowered, including the Attack stat. This does not include self-induced stat drops like those from Close Combat. This Pokemon also cannot become burned.",
                shortDesc: "This Pokemon's Attack is boosted by 2 for each of its stats that is lowered by a foe. This Pokemon cannot be burned. Gaining this Ability while paralyzed cures it.",
                onAfterEachBoost: function(boost, target, source) {
                        if (!source || target.side === source.side) {
                                return;
                        }
                        var statsLowered = false;
                        for (var i in boost) {
                                if (boost[i] < 0) {
                                        statsLowered = true;
                                }
                        }
                        if (statsLowered) {
                                this.boost({atk: 2});
                        }
                },
                onUpdate: function(pokemon) {
                        if (pokemon.status === 'brn') {
                                pokemon.cureStatus();
                        }
                },
                onImmunity: function(type, pokemon) {
                        if (type === 'brn') return false;
                },
                id: "defiant",
                name: "Defiant",
                rating: 2,
                num: 128
        }
};
