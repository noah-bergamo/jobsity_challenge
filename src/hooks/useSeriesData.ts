import React, { useState } from "react";
import useAPI from "./useAPI";

const useSeriesData = () => {
  const [page, setPage] = useState<number>(1);
  const api = useAPI();

  const loadSeriesData = async (pageNumber: number = 1) => {
    const url = `/shows?page=${pageNumber}`;
    setPage(pageNumber);
    try {
      const resp = await api.get(url);
      return resp.data;
    } catch (e) {
      console.log({ e });
    }
  };

  const searchSeriesByName = async (seriesName: string) => {
    const url = `/search/shows?q=${seriesName}`;
    try {
      const resp = await api.get(url);
      return resp.data;
    } catch (e) {
      console.log({ e });
    }
  };

  const loadSerieMainInfo = async (id: number) => {
    const url = `/shows/${id}`;
    try {
      const resp = await api.get(url);
      return resp.data;
    } catch (e) {
      console.log({ e });
    }
  };
  const loadSerieSeasonsInfo = async (id: number) => {
    const url = `/shows/${id}/seasons`;
    try {
      const resp = await api.get(url);
      return resp.data;
    } catch (e) {
      console.log({ e });
    }
  };

  const loadSerieEpisodesInfo = async (seasonID: number) => {
    const url = `/seasons/${seasonID}`;
    try {
      const resp = await api.get(url);
      return resp.data;
    } catch (e) {
      console.log({ e });
    }
  };
  return {
    page,
    loadSeriesData,
    searchSeriesByName,
    loadSerieMainInfo,
    loadSerieSeasonsInfo,
    loadSerieEpisodesInfo,
  };
};

export default useSeriesData;
