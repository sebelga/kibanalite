
export const pluggins: any = {
  oss: {},
  xPack: {
    snapshotRestore: async () =>
      await import("./kibana/x-pack/plugins/snapshot_restore/public/index"),
  },
};
