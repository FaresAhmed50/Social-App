import {Request} from "express";
import {ZodType} from "zod";


export type requestType = keyof Request;

export type SchemaInterface = Partial<Record<requestType , ZodType>>