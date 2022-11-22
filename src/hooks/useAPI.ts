import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

let instance: AxiosInstance;

const useAPI = () => {
  useEffect(() => {
    if (!instance) createInstance();
  }, []);

  const createInstance = () => {
    const api = axios.create({
      baseURL: "https://api.tvmaze.com/",
      timeout: 30000,
    });
    instance = api;
  };

  const getMethod = (
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> => {
    return instance.get(url, config);
  };

  return {
    get: (url: string, config?: AxiosRequestConfig) => getMethod(url, config),
  };
};

export default useAPI;
