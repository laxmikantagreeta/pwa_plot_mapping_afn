import React from "react";

export default function Dropdowns({
  years, seasons, states, kmls, dates,
  yearId, setYearId,
  seasonId, setSeasonId,
  stateId, setStateId,
  kmlId, setKmlId,
  selectedDate, setSelectedDate,
  selectedIndex, setSelectedIndex
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <select value={yearId} onChange={e => setYearId(e.target.value)}>
        <option value="">Year</option>
        {years.map(y => <option key={y.id} value={y.id}>{y.description}</option>)}
      </select>

      <select value={seasonId} onChange={e => setSeasonId(e.target.value)} disabled={!yearId}>
        <option value="">Season</option>
        {seasons.map(s => <option key={s.id} value={s.id}>{s.description}</option>)}
      </select>

      <select value={stateId} onChange={e => setStateId(e.target.value)} disabled={!seasonId}>
        <option value="">State</option>
        {states.map(st => <option key={st.id} value={st.id}>{st.description}</option>)}
      </select>

      <select value={kmlId} onChange={e => setKmlId(e.target.value)} disabled={!stateId}>
        <option value="">KML</option>
        {kmls.map(k => <option key={k.id} value={k.id}>{k.name}</option>)}
      </select>

      <select value={selectedDate} onChange={e => setSelectedDate(e.target.value)} disabled={!kmlId}>
        <option value="">Date</option>
        {dates.map((d, i) => <option key={i} value={d}>{d}</option>)}
      </select>

      <select value={selectedIndex} onChange={e => setSelectedIndex(e.target.value)}>
        <option value="NDVI">NDVI</option>
        <option value="NDMI">NDMI</option>
      </select>
    </div>
  );
}

