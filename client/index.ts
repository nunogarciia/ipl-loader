import * as alt from 'alt-client';
import * as native from 'natives';

alt.on("connectionComplete", () => {
    alt.loadDefaultIpls();

    const blip = new alt.PointBlip(5943.5679611650485, -6272.114833599767, 2);
    blip.alpha = 0;

    alt.requestIpl('h4_islandairstrip');
    alt.requestIpl('h4_islandairstrip_props');
    alt.requestIpl('h4_islandx_mansion');
    alt.requestIpl('h4_islandx_mansion_props');
    alt.requestIpl('h4_islandx_props');
    alt.requestIpl('h4_islandxdock');
    alt.requestIpl('h4_islandxdock_props');
    alt.requestIpl('h4_islandxdock_props_2');
    alt.requestIpl('h4_islandxtower');
    alt.requestIpl('h4_islandx_maindock');
    alt.requestIpl('h4_islandx_maindock_props');
    alt.requestIpl('h4_islandx_maindock_props_2');
    alt.requestIpl('h4_IslandX_Mansion_Vault');
    alt.requestIpl('h4_islandairstrip_propsb');
    alt.requestIpl('h4_beach');
    alt.requestIpl('h4_beach_props');
    alt.requestIpl('h4_beach_bar_props');
    alt.requestIpl('h4_islandx_barrack_props');
    alt.requestIpl('h4_islandx_checkpoint');
    alt.requestIpl('h4_islandx_checkpoint_props');
    alt.requestIpl('h4_islandx_Mansion_Office');
    alt.requestIpl('h4_islandx_Mansion_LockUp_01');
    alt.requestIpl('h4_islandx_Mansion_LockUp_02');
    alt.requestIpl('h4_islandx_Mansion_LockUp_03');
    alt.requestIpl('h4_islandairstrip_hangar_props');
    alt.requestIpl('h4_IslandX_Mansion_B');
    alt.requestIpl('h4_islandairstrip_doorsclosed');
    alt.requestIpl('h4_Underwater_Gate_Closed');
    alt.requestIpl('h4_mansion_gate_closed');
    alt.requestIpl('h4_aa_guns');
    alt.requestIpl('h4_IslandX_Mansion_GuardFence');
    alt.requestIpl('h4_IslandX_Mansion_Entrance_Fence');
    alt.requestIpl('h4_IslandX_Mansion_B_Side_Fence');
    alt.requestIpl('h4_IslandX_Mansion_Lights');
    alt.requestIpl('h4_islandxcanal_props');
    alt.requestIpl('h4_beach_props_party');
    alt.requestIpl('h4_islandX_Terrain_props_06_a');
    alt.requestIpl('h4_islandX_Terrain_props_06_b');
    alt.requestIpl('h4_islandX_Terrain_props_06_c');
    alt.requestIpl('h4_islandX_Terrain_props_05_a');
    alt.requestIpl('h4_islandX_Terrain_props_05_b');
    alt.requestIpl('h4_islandX_Terrain_props_05_c');
    alt.requestIpl('h4_islandX_Terrain_props_05_d');
    alt.requestIpl('h4_islandX_Terrain_props_05_e');
    alt.requestIpl('h4_islandX_Terrain_props_05_f');
    alt.requestIpl('H4_islandx_terrain_01');
    alt.requestIpl('H4_islandx_terrain_02');
    alt.requestIpl('H4_islandx_terrain_03');
    alt.requestIpl('H4_islandx_terrain_04');
    alt.requestIpl('H4_islandx_terrain_05');
    alt.requestIpl('H4_islandx_terrain_06');
    alt.requestIpl('h4_ne_ipl_00');
    alt.requestIpl('h4_ne_ipl_01');
    alt.requestIpl('h4_ne_ipl_02');
    alt.requestIpl('h4_ne_ipl_03');
    alt.requestIpl('h4_ne_ipl_04');
    alt.requestIpl('h4_ne_ipl_05');
    alt.requestIpl('h4_ne_ipl_06');
    alt.requestIpl('h4_ne_ipl_07');
    alt.requestIpl('h4_ne_ipl_08');
    alt.requestIpl('h4_ne_ipl_09');
    alt.requestIpl('h4_nw_ipl_00');
    alt.requestIpl('h4_nw_ipl_01');
    alt.requestIpl('h4_nw_ipl_02');
    alt.requestIpl('h4_nw_ipl_03');
    alt.requestIpl('h4_nw_ipl_04');
    alt.requestIpl('h4_nw_ipl_05');
    alt.requestIpl('h4_nw_ipl_06');
    alt.requestIpl('h4_nw_ipl_07');
    alt.requestIpl('h4_nw_ipl_08');
    alt.requestIpl('h4_nw_ipl_09');
    alt.requestIpl('h4_se_ipl_00');
    alt.requestIpl('h4_se_ipl_01');
    alt.requestIpl('h4_se_ipl_02');
    alt.requestIpl('h4_se_ipl_03');
    alt.requestIpl('h4_se_ipl_04');
    alt.requestIpl('h4_se_ipl_05');
    alt.requestIpl('h4_se_ipl_06');
    alt.requestIpl('h4_se_ipl_07');
    alt.requestIpl('h4_se_ipl_08');
    alt.requestIpl('h4_se_ipl_09');
    alt.requestIpl('h4_sw_ipl_00');
    alt.requestIpl('h4_sw_ipl_01');
    alt.requestIpl('h4_sw_ipl_02');
    alt.requestIpl('h4_sw_ipl_03');
    alt.requestIpl('h4_sw_ipl_04');
    alt.requestIpl('h4_sw_ipl_05');
    alt.requestIpl('h4_sw_ipl_06');
    alt.requestIpl('h4_sw_ipl_07');
    alt.requestIpl('h4_sw_ipl_08');
    alt.requestIpl('h4_sw_ipl_09');
    alt.requestIpl('h4_islandx_mansion');
    alt.requestIpl('h4_islandxtower_veg');
    alt.requestIpl('h4_islandx_sea_mines');
    alt.requestIpl('h4_islandx');
    alt.requestIpl('h4_islandx_barrack_hatch');
    alt.requestIpl('h4_islandxdock_water_hatch');
    alt.requestIpl('h4_beach_party');
    alt.requestIpl('h4_mph4_terrain_01_grass_0');
    alt.requestIpl('h4_mph4_terrain_01_grass_1');
    alt.requestIpl('h4_mph4_terrain_02_grass_0');
    alt.requestIpl('h4_mph4_terrain_02_grass_1');
    alt.requestIpl('h4_mph4_terrain_02_grass_2');
    alt.requestIpl('h4_mph4_terrain_02_grass_3');
    alt.requestIpl('h4_mph4_terrain_04_grass_0');
    alt.requestIpl('h4_mph4_terrain_04_grass_1');
    alt.requestIpl('h4_mph4_terrain_04_grass_2');
    alt.requestIpl('h4_mph4_terrain_04_grass_3');
    alt.requestIpl('h4_mph4_terrain_05_grass_0');
    alt.requestIpl('h4_mph4_terrain_06_grass_0');
    alt.requestIpl('h4_mph4_airstrip_interior_0_airstrip_hanger');

    alt.requestIpl('vw_casino_main');
    alt.requestIpl('vw_casino_garage');
    alt.requestIpl('vw_casino_carpark');
    alt.requestIpl('vw_casino_penthouse');
    alt.requestIpl('vw_dlc_casino_door');
    alt.requestIpl('hei_dlc_casino_door');
    alt.requestIpl('hei_dlc_windows_casino');
    alt.requestIpl('hei_dlc_casino_aircon');

    let interiorID = native.getInteriorAtCoords(976.636, 70.295, 115.164);

    let phPropList = [
        'Set_Pent_Tint_Shell',
        'Set_Pent_Pattern_01',
        'Set_Pent_Spa_Bar_Open',
        'Set_Pent_Media_Bar_Open',
        'Set_Pent_Dealer',
        'Set_Pent_Arcade_Retro',
        'Set_Pent_Bar_Clutter',
        'Set_Pent_Clutter_01',
        'set_pent_bar_light_01',
        'set_pent_bar_party_0',
    ];

    if (native.isValidInterior(interiorID)) {
        for (const propName of phPropList) {
            native.activateInteriorEntitySet(interiorID, propName);
            native.setInteriorEntitySetTintIndex(interiorID, propName, 1);
        }
        native.refreshInterior(interiorID);
    }

    alt.requestIpl('shr_int');
    interiorID = native.getInteriorAtCoords(-42.950679779052734, -1098.60986328125, 26.422361373901367)
    if (native.isValidInterior(interiorID)) {
        native.activateInteriorEntitySet(interiorID, 'csr_beforeMission');
        native.activateInteriorEntitySet(interiorID, 'shutter_closed');
        native.refreshInterior(interiorID);
    }

    alt.requestIpl('sf_fixeroffice_bh1_05');
    alt.requestIpl('sf_fixeroffice_hw1_08');
    alt.requestIpl('sf_fixeroffice_kt1_05');
    alt.requestIpl('sf_fixeroffice_kt1_08');
    alt.requestIpl('sf_int_placement_sec_interior_1_dlc_studio_sec_milo_');
    alt.requestIpl('sf_musicrooftop');
    alt.requestIpl('sf_int_placement_sec_interior_2_dlc_garage_sec_milo_');
    alt.requestIpl('sf_billboards');
    // IPLManager();
});

const islandCenter = new alt.Vector3(4840.571, -5174.425, 2.0);
let nearIsland = false;

alt.everyTick(() => {
    let distance = alt.Player.local.pos.distanceTo(islandCenter);

    if (nearIsland) {
        native.setRadarAsExteriorThisFrame();
        native.setRadarAsInteriorThisFrame(alt.hash("h4_fake_islandx"), 4700.0, -5145.0, 0, 0);

        if (distance >= 3000) {
            nearIsland = false;
            native.setScenarioGroupEnabled("Heist_Island_Peds", false);
            native.setAudioFlag("PlayerOnDLCHeist4Island", false);
            native.setAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Zones", false, false);
            native.setAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Disabled_Zones", false, false);
            native.resetDeepOceanScaler();
        }
    } else if (distance < 3000 && !nearIsland) {
        nearIsland = true;
        native.setScenarioGroupEnabled('Heist_Island_Peds', true);
        native.setAudioFlag("PlayerOnDLCHeist4Island", true);
        native.setAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Zones", true, true);
        native.setAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Disabled_Zones", false, true);
        native.setDeepOceanScaler(0.1);
    }
});