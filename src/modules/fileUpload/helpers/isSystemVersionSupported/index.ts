import isVersionGreaterOrEqual from "semver/functions/gte";

export const isSystemVersionSupported = (
  systemVersion: string,
  minimumSupportedVersion: string
) => isVersionGreaterOrEqual(systemVersion, minimumSupportedVersion);
