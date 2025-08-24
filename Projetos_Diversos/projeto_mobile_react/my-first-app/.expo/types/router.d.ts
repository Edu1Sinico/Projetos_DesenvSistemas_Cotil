/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/home` | `/(tabs)/passwords` | `/..\components\modal\passwordItem` | `/_sitemap` | `/home` | `/passwords` | `/routes`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
