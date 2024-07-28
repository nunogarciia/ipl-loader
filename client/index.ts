import * as alt from 'alt-client';
import * as native from 'natives';
import { LoaderIPLConfig } from '../shared/config.js';

alt.on("connectionComplete", () => {
    // Load All default IPLS
    alt.loadDefaultIpls();

    // Load Configs
    const configKeys = Object.keys(LoaderIPLConfig);
    configKeys.forEach(key => {
        if (key === 'cayoIsland') {
            const blip = new alt.PointBlip(5943.5679611650485, -6272.114833599767, 2);
            blip.alpha = 0;
        }

        let interiorID = undefined;
        if (LoaderIPLConfig[key].interiorCords) {
            interiorID = native.getInteriorAtCoords(
                LoaderIPLConfig[key].interiorCords.x,
                LoaderIPLConfig[key].interiorCords.y,
                LoaderIPLConfig[key].interiorCords.z,
            );
        } else if (!LoaderIPLConfig[key].interiorCords && LoaderIPLConfig[key].interiorID) {
            interiorID = LoaderIPLConfig[key].interiorID;
        } else {
            alt.logWarning("Interior ID not found for ", key);
            return;
        }

        // Load the IPLS
        if (LoaderIPLConfig[key].ipls.length > 0) {
            LoaderIPLConfig[key].ipls.forEach((ipl: string) => {
                alt.requestIpl(ipl);
            });
        }
        
        // Validate Interiors
        if (native.isValidInterior(interiorID)) {
            // Active Entities for the Interiors
            if (LoaderIPLConfig[key].entities.length > 0) {
                LoaderIPLConfig[key].entities.forEach((entity: string) => {
                    native.activateInteriorEntitySet(interiorID, entity);
                });
                native.refreshInterior(interiorID);
            }
        }
    });

    // alt.requestIpl('fiblobbyfake');
    // alt.requestIpl('FIBlobby');
    // alt.requestIpl('atriumglmission');
    // alt.requestIpl('dt1_05_hc_end');
    // alt.requestIpl('dt1_05_hc_req');
    // alt.requestIpl('dt1_05_hc_remove');
    // const interiorID = native.getInteriorAtCoords(109.885994, -752.9315, 46.65693);
    // if (native.isValidInterior(interiorID)) {
    //     native.activateInteriorEntitySet(interiorID, entity);
    //     native.refreshInterior(interiorID);
    // }
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