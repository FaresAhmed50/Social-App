import express, {Application} from "express";

export interface BootstrapArgs  {
    app: Application;
    express: typeof express;
}