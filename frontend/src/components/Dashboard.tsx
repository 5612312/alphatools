import './Dashboard.css'

interface Module {
  name: string
  route: string
  icon: string
  description?: string
}

const placeholderModules: Module[] = [
  { name: 'Benutzer anlegen', route: '/tools/create-user', icon: '👤' },
  { name: 'Benutzer freigeben', route: '/tools/enable-user', icon: '🔐' },
  { name: 'Drucker zuweisen', route: '/tools/add-printer', icon: '🖨️' },
  { name: 'Benutzer löschen', route: '/tools/remove-user', icon: '🧹' },
  { name: 'Logbuch', route: '/logs', icon: '🧾' },
  { name: 'Einstellungen', route: '/settings', icon: '⚙️' },
]

export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1>Hallo Julian \u{1F44B}</h1>
        <p>Du bist als <strong>IT-Admin</strong> angemeldet</p>
      </header>

      <section className="dashboard__roles">
        <h2>Zugriffsübersicht</h2>
        <ul>
          <li>Azure Gruppe: IT-Team</li>
          <li>Rollen: Admin, Support</li>
        </ul>
      </section>

      <section className="dashboard__modules">
        <h2>Verfügbare Tools / Module</h2>
        <div className="module-grid">
          {placeholderModules.map((mod) => (
            <div key={mod.route} className="module-card" title={mod.description}>
              <span className="module-card__icon">{mod.icon}</span>
              <span className="module-card__name">{mod.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="dashboard__logs">
        <h2>Letzte Aktivitäten</h2>
        <p>(Platzhalter für Log-Einträge)</p>
      </section>
    </div>
  )
}
