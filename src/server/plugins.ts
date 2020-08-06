import * as snapshotRestore from "../kibana/x-pack/plugins/snapshot_restore/server/index";

export const plugins: any = {
  oss: {},
  xPack: {
    snapshotRestore,
  },
};
