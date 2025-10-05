const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-xl">
        <p className="text-foreground text-sm font-medium mb-2">{label}</p>
        {payload.map(
          (entry: any, index: number) => (
            console.log(entry),
            (
              <p key={index} className="text-xs" style={{ color: entry.color }}>
                {entry.name}: {entry.value}
                {entry.name.includes("Precisión") ||
                entry.name.includes("valor")
                  ? "%"
                  : entry.name.includes("tiempo")
                  ? " min"
                  : ""}
              </p>
            )
          )
        )}
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
