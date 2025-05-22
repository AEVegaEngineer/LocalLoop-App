export type RootTabParamList = {
  Explore: undefined;
  Map: undefined;
  Favorites: undefined;
};

export type ExploreStackParamList = {
  ExploreList: undefined;
  BusinessDetail: { id: string };
  AddOpinion: { businessId: string };
};
