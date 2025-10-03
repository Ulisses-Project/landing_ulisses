"use client";

import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Datos inventados pero realistas para los gráficos
const precisionData = [
  { mes: "Ene", ecoanalytics: 96.2, tradicional: 92.1 },
  { mes: "Feb", ecoanalytics: 96.8, tradicional: 92.5 },
  { mes: "Mar", ecoanalytics: 97.1, tradicional: 93.2 },
  { mes: "Abr", ecoanalytics: 97.5, tradicional: 93.8 },
  { mes: "May", ecoanalytics: 97.9, tradicional: 94.1 },
  { mes: "Jun", ecoanalytics: 98.2, tradicional: 94.3 },
  { mes: "Jul", ecoanalytics: 98.5, tradicional: 94.0 },
];

const tiempoAnalisisData = [
  { categoria: "Análisis Básico", tradicional: 12, ecoanalytics: 4 },
  { categoria: "Análisis Complejo", tradicional: 28, ecoanalytics: 10 },
  { categoria: "Revisión", tradicional: 8, ecoanalytics: 2 },
  { categoria: "Informe", tradicional: 15, ecoanalytics: 5 },
];

const volumenData = [
  { mes: "Ene", analisis: 3200 },
  { mes: "Feb", analisis: 3800 },
  { mes: "Mar", analisis: 4200 },
  { mes: "Abr", analisis: 4800 },
  { mes: "May", analisis: 5400 },
  { mes: "Jun", analisis: 6100 },
  { mes: "Jul", analisis: 6800 },
];

const rendimientoData = [
  { metrica: "Precisión", valor: 98.5 },
  { metrica: "Velocidad", valor: 95.0 },
  { metrica: "Consistencia", valor: 97.2 },
  { metrica: "Detección", valor: 96.8 },
  { metrica: "Confiabilidad", valor: 99.1 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-xl">
        <p className="text-foreground text-sm font-medium mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
            {entry.name.includes("Precisión") || entry.name.includes("valor")
              ? "%"
              : entry.name.includes("tiempo")
              ? " min"
              : ""}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function PrecisionChart() {
  return (
    <Card className="p-6 bg-card backdrop-blur-sm border">
      <h3 className="text-xl font-bold mb-4 text-foreground">
        Evolución de Precisión Diagnóstica
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Comparación mensual entre EcoAnalytics y método tradicional
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={precisionData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
          <XAxis
            dataKey="mes"
            className="stroke-muted-foreground"
            style={{ fontSize: "12px" }}
          />
          <YAxis
            className="stroke-muted-foreground"
            style={{ fontSize: "12px" }}
            domain={[90, 100]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: "12px" }}
            className="text-muted-foreground"
          />
          <Line
            type="monotone"
            dataKey="ecoanalytics"
            name="EcoAnalytics"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ fill: "#3b82f6", r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="tradicional"
            name="Método Tradicional"
            stroke="#64748b"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: "#64748b", r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export function TiempoAnalisisChart() {
  return (
    <Card className="p-6 bg-card backdrop-blur-sm border">
      <h3 className="text-xl font-bold mb-4 text-foreground">
        Tiempo de Análisis por Categoría
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Comparación de tiempos promedio en minutos
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={tiempoAnalisisData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
          <XAxis
            dataKey="categoria"
            className="stroke-muted-foreground"
            style={{ fontSize: "11px" }}
          />
          <YAxis
            className="stroke-muted-foreground"
            style={{ fontSize: "12px" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: "12px" }}
            className="text-muted-foreground"
          />
          <Bar
            dataKey="tradicional"
            name="Método Tradicional"
            fill="#64748b"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="ecoanalytics"
            name="EcoAnalytics"
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}

export function VolumenChart() {
  return (
    <Card className="p-6 bg-card backdrop-blur-sm border">
      <h3 className="text-xl font-bold mb-4 text-foreground">
        Volumen de Análisis Mensuales
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Crecimiento en número de análisis procesados
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={volumenData}>
          <defs>
            <linearGradient id="colorAnalisis" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
          <XAxis
            dataKey="mes"
            className="stroke-muted-foreground"
            style={{ fontSize: "12px" }}
          />
          <YAxis
            className="stroke-muted-foreground"
            style={{ fontSize: "12px" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="analisis"
            name="Análisis"
            stroke="#3b82f6"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorAnalisis)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}

export function RendimientoChart() {
  return (
    <Card className="p-6 bg-card backdrop-blur-sm border">
      <h3 className="text-xl font-bold mb-4 text-foreground">
        Métricas de Rendimiento del Sistema
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Evaluación integral de capacidades de EcoAnalytics
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={rendimientoData}>
          <PolarGrid className="stroke-border" />
          <PolarAngleAxis
            dataKey="metrica"
            className="stroke-muted-foreground"
            style={{ fontSize: "12px" }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            className="stroke-muted-foreground"
            style={{ fontSize: "10px" }}
          />
          <Radar
            name="Rendimiento"
            dataKey="valor"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.5}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </Card>
  );
}
