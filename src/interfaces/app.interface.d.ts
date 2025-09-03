import express, {Application} from "express";

export type BootstrapArgs = {
    app: Application;
    express: typeof express;
};