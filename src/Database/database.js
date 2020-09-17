import React from "react";
import Database from "../Database/database.json";

export default {
  database: Database,
  authors: Database[2].data,
  videos: Database[4].data,
  data: {
    author: {},
    playlists: [],
    videos: [],
  },
};
