
export const plugins: any = {
  oss: {},
  xPack: {
    snapshotRestore: async () => {
      return await import("../kibana/x-pack/plugins/snapshot_restore/public")
    },
  },
};
