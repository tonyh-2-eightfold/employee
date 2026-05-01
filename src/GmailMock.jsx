import { useMemo, useState } from 'react'
import './gmail-ui.css'
import tipsThumbnail from './assets/tips-thumbnail.png'

function StarFilled() {
  return (
    <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#f4b400', fontVariationSettings: "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 20" }} aria-hidden>
      star
    </span>
  )
}

function StarEmpty() {
  return (
    <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#dadce0', fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }} aria-hidden>
      star
    </span>
  )
}

function CalendarIcon() {
  return (
    <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#5f6368', fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }} aria-hidden>
      calendar_today
    </span>
  )
}

export default function GmailMock() {
  const emails = useMemo(
    () => [
      {
        id: 'e1',
        from: 'Acme Inc.',
        fromEmail: 'hr@acme.com',
        subject: 'Help Acme Inc. evaluate our AI Readiness!',
        preview:
          'Dear Sarah, Acme is currently assessing our AI readiness across our organization...',
        time: 'May 1',
        unread: true,
        selected: true,
        star: false,
        cal: false,
      },
      {
        id: 'e2',
        from: 'Marcus Reeves',
        subject: 'Q2 Account Strategy - Enterprise Tier',
        preview: 'Hi Sarah, following up on our discussion about the Meridian account expansion...',
        time: '1:34 PM',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
      {
        id: 'e3',
        from: 'Lisa Nakamura',
        subject: 'Updated invitation: Pipeline Review @ Wed Mar 26...',
        preview: '',
        time: '11:02 AM',
        unread: false,
        selected: false,
        star: false,
        cal: true,
      },
      {
        id: 'e4',
        from: 'Priya Mehta',
        subject: 'Fwd: Renewal risk - GlobalTech Solutions',
        preview: 'Team, flagging this for immediate attention. The contract is...',
        time: '10:30 AM',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
      {
        id: 'e5',
        from: 'Kevin O\u2019Brien',
        subject: 'CS Team Standup - Notes & Action Items',
        preview: 'Sharing notes from today\u2019s standup. Key items: onboarding for...',
        time: '9:50 AM',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
      {
        id: 'e6',
        from: 'Jordan Ellis',
        subject: 'Updated invitation: Sarah <> Jordan 1:1 @ Tue Mar...',
        preview: '',
        time: '7:46 AM',
        unread: false,
        selected: false,
        star: false,
        cal: true,
      },
      {
        id: 'e7',
        from: 'Salesforce',
        subject: 'Your Salesforce login from a new device',
        preview: 'A new login to your Salesforce account was detected from...',
        time: '1:08 AM',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
      {
        id: 'e8',
        from: 'Sarah Kim',
        subject: 'Invitation: CS All-Hands @ Thu Mar 27, 2026 2:00p...',
        preview: '',
        time: 'Mar 25',
        unread: false,
        selected: false,
        star: false,
        cal: true,
      },
      {
        id: 'e9',
        from: 'Zoom',
        subject: 'Cloud recording - Weekly Account Reviews',
        preview: 'Your cloud recording is now available. Topic: Weekly Account...',
        time: 'Mar 25',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
      {
        id: 'e10',
        from: 'Raj Patel',
        subject: 'Updated invitation: QBR Prep - NovaCorp @ Mon...',
        preview: '',
        time: 'Mar 25',
        unread: false,
        selected: false,
        star: false,
        cal: true,
      },
      {
        id: 'e11',
        from: 'Acme People Team',
        subject: 'Open enrollment reminder - Benefits selection due Apr 1',
        preview: 'Hi Sarah, this is a friendly reminder that open enrollment closes...',
        time: 'Mar 25',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
      {
        id: 'e12',
        from: 'Maria Santos',
        subject: 'Invitation: Customer Health Score Review @ Mon Mar 24...',
        preview: '',
        time: 'Mar 24',
        unread: false,
        selected: false,
        star: false,
        cal: true,
      },
      {
        id: 'e13',
        from: 'Slack',
        subject: 'Sarah, you have 12 unread messages in #cs-strategic',
        preview: 'Marcus Reeves posted in #cs-strategic: Quick update on the...',
        time: 'Mar 24',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
      {
        id: 'e14',
        from: 'Nathan Torres',
        subject: 'Invitation: Onboarding kickoff - Vertex Industries @ Wed...',
        preview: '',
        time: 'Mar 24',
        unread: false,
        selected: false,
        star: false,
        cal: true,
      },
      {
        id: 'e15',
        from: 'Gong',
        subject: 'Your call with NovaCorp was analyzed',
        preview: 'Key moments from your call: pricing discussed at 12:04, next steps at...',
        time: 'Mar 24',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
      {
        id: 'e16',
        from: 'Anika Sharma',
        subject: 'Re: Proposal deck for Meridian - final review',
        preview: 'Looks good to me. One small tweak on slide 8 — can we update the...',
        time: 'Mar 24',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
      {
        id: 'e17',
        from: 'Acme IT',
        subject: 'Scheduled maintenance - VPN downtime Sat Mar 29',
        preview: 'Please be advised that VPN services will be unavailable from...',
        time: 'Mar 23',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
      {
        id: 'e18',
        from: 'Derek Washington',
        subject: 'Invitation: Deal desk review - Apex Healthcare @ Thu...',
        preview: '',
        time: 'Mar 23',
        unread: false,
        selected: false,
        star: false,
        cal: true,
      },
      {
        id: 'e19',
        from: 'LinkedIn',
        subject: 'Sarah, 3 people viewed your profile this week',
        preview: 'See who viewed your profile and discover new connections in your...',
        time: 'Mar 23',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
      {
        id: 'e20',
        from: 'Claire Dubois',
        subject: 'Re: Customer success playbook updates',
        preview: 'Thanks Sarah. I incorporated your feedback on the health score section...',
        time: 'Mar 23',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
      {
        id: 'e21',
        from: 'Marcus Reeves',
        subject: 'Fwd: Competitive intel - TechVantage lost deal',
        preview: 'FYI - interesting debrief from the field. They went with a smaller...',
        time: 'Mar 23',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
      {
        id: 'e22',
        from: 'Workday',
        subject: 'Action required: Approve your timesheet for Mar 17-21',
        preview: 'Your timesheet for the period March 17 - March 21 is pending...',
        time: 'Mar 22',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
      {
        id: 'e23',
        from: 'Lisa Nakamura',
        subject: 'Updated invitation: SKO Planning Committee @ Fri...',
        preview: '',
        time: 'Mar 22',
        unread: false,
        selected: false,
        star: false,
        cal: true,
      },
      {
        id: 'e24',
        from: 'Gainsight',
        subject: 'Health score alert: Pinnacle Systems dropped to yellow',
        preview: 'The health score for Pinnacle Systems has changed from green to...',
        time: 'Mar 22',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
      {
        id: 'e25',
        from: 'Tom Bradley',
        subject: 'Re: Headcount planning for Q3',
        preview: 'I spoke with finance and we have approval for 2 additional CSMs. Let...',
        time: 'Mar 22',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
      {
        id: 'e26',
        from: 'Priya Mehta',
        subject: 'Invitation: GlobalTech exec sponsor meeting @ Mon...',
        preview: '',
        time: 'Mar 21',
        unread: false,
        selected: false,
        star: false,
        cal: true,
      },
      {
        id: 'e27',
        from: 'Notion',
        subject: 'Raj Patel mentioned you in CS Playbook',
        preview: '@Sarah - can you review the new onboarding checklist I added for...',
        time: 'Mar 21',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
      {
        id: 'e28',
        from: 'Sarah Kim',
        subject: 'Re: CS team offsite agenda - feedback needed',
        preview: 'Love the workshop idea. For the afternoon session, what about a...',
        time: 'Mar 21',
        unread: false,
        selected: false,
        star: false,
        cal: false,
      },
    ],
    [],
  )

  const initialSelectedId =
    emails.find((e) => e.selected)?.id ?? emails[0]?.id ?? null

  const [view, setView] = useState('inbox')
  const [selectedId, setSelectedId] = useState(initialSelectedId)
  const [checkedIds, setCheckedIds] = useState(new Set())
  const [moreOpen, setMoreOpen] = useState(false)

  const selectedEmail = useMemo(() => {
    return emails.find((e) => e.id === selectedId) ?? emails[0]
  }, [emails, selectedId])

  function showEmail(email) {
    setSelectedId(email.id)
    setCheckedIds(new Set())
    setView('email')
  }

  function toggleCheck(id, evt) {
    evt.stopPropagation()
    setCheckedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function toggleAllChecked() {
    if (checkedIds.size > 0) {
      setCheckedIds(new Set())
    } else {
      setCheckedIds(new Set(emails.map((e) => e.id)))
    }
  }

  return (
    <div className="gmail-outer">
      <div className="left-rail">
        <button className="left-rail__hamburger" type="button" aria-label="Menu">
          <span className="material-symbols-outlined" style={{ fontSize: 22, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }} aria-hidden>menu</span>
        </button>
        <div className="left-rail__item left-rail__item--active" role="button" tabIndex={0}>
          <div className="left-rail__icon-wrap" style={{ position: 'relative' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20" }} aria-hidden>mail</span>
            <span style={{ position: 'absolute', top: -2, right: 2, minWidth: 16, height: 16, borderRadius: 8, background: '#d93025', color: '#fff', fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 4px', fontFamily: 'Google Sans, Roboto, Arial, sans-serif', lineHeight: 1 }}>3</span>
          </div>
          <span className="left-rail__label">Mail</span>
        </div>
        <div className="left-rail__item" role="button" tabIndex={0}>
          <div className="left-rail__icon-wrap">
            <span className="material-symbols-outlined" style={{ fontSize: 20, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20" }} aria-hidden>mode_comment</span>
          </div>
          <span className="left-rail__label">Chat</span>
        </div>
        <div className="left-rail__item" role="button" tabIndex={0}>
          <div className="left-rail__icon-wrap">
            <span className="material-symbols-outlined" style={{ fontSize: 20, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20" }} aria-hidden>video_camera_front</span>
          </div>
          <span className="left-rail__label">Meet</span>
        </div>
      </div>
      <div className="gmail-right">
      <div className="header">
        <div className="header-left">
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <div
              id="gmailLogoFallback"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <img src="/gmail-icon.svg" alt="" style={{ height: 24, width: 32 }} aria-hidden="true" />
              <span
                style={{
                  fontFamily: 'Google Sans, Roboto, Arial, sans-serif',
                  fontSize: 18,
                  color: '#5f6368',
                  fontWeight: 400,
                  letterSpacing: -0.3,
                }}
              >
                Gmail
              </span>
            </div>
          </div>
        </div>

        <div className="search-bar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#444746" />
          </svg>
          <input type="text" placeholder="Search mail" />
          <button className="search-bar__filter-btn" type="button" aria-label="Show search options">
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" fill="#444746" />
            </svg>
          </button>
        </div>

        <div className="header-right">
          <button className="hdr-icon-btn" type="button" aria-label="Help">
            <span className="material-symbols-outlined" aria-hidden>help</span>
          </button>

          <button className="hdr-icon-btn" type="button" aria-label="Settings">
            <span className="material-symbols-outlined" aria-hidden>settings</span>
          </button>

          <button className="hdr-icon-btn" type="button" aria-label="Gemini">
            {/* Gemini 4-point star */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#444746" aria-hidden>
              <path d="M12 1C12 1 14.2 9 12 12C9.8 9 12 1 12 1ZM12 23C12 23 9.8 15 12 12C14.2 15 12 23 12 23ZM1 12C1 12 9 14.2 12 12C9 9.8 1 12 1 12ZM23 12C23 12 15 9.8 12 12C15 14.2 23 12 23 12Z" />
            </svg>
          </button>

          <button className="hdr-icon-btn" type="button" aria-label="Google apps">
            <span className="material-symbols-outlined" aria-hidden>apps</span>
          </button>

          <div
            className="avatar-pro"
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              overflow: 'hidden',
              cursor: 'pointer',
              flexShrink: 0,
              marginLeft: 8,
              background: '#e0e0e0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            role="button"
            aria-label="User avatar"
            tabIndex={0}
          >
            <img
              src="/avatar-sarah.jpg"
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = '#1a73e8'; e.target.parentElement.style.color = 'white'; e.target.parentElement.style.fontSize = '14px'; e.target.parentElement.style.fontWeight = '500'; e.target.parentElement.textContent = 'S' }}
            />
          </div>
        </div>
      </div>

      <div className="main">
        <aside className="sidebar">
          <div className="compose-wrap">
            <button className="compose-btn" type="button">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#444746" />
              </svg>
              Compose
            </button>
          </div>

          <div className="nav-list">
            <div className="nav-item active" role="button" tabIndex={0}>
              <span className="material-symbols-outlined" aria-hidden style={{ color: '#1a73e8' }}>inbox</span>
              <span className="nav-label">Inbox</span>
              <span className="nav-count">3</span>
            </div>

            <div className="nav-item" role="button" tabIndex={0}>
              <span className="material-symbols-outlined" aria-hidden>star</span>
              <span className="nav-label">Starred</span>
            </div>

            <div className="nav-item" role="button" tabIndex={0}>
              <span className="material-symbols-outlined" aria-hidden>schedule</span>
              <span className="nav-label">Snoozed</span>
            </div>

            <div className="nav-item" role="button" tabIndex={0}>
              <span className="material-symbols-outlined" aria-hidden>send</span>
              <span className="nav-label">Sent</span>
            </div>

            <div className="nav-item" role="button" tabIndex={0}>
              <span className="material-symbols-outlined" aria-hidden>draft</span>
              <span className="nav-label" style={{ fontWeight: 700 }}>Drafts</span>
              <span className="nav-count" style={{ color: '#5f6368' }}>2</span>
            </div>

            <div className="nav-item nav-item--categories" role="button" tabIndex={0}>
              <span className="nav-expand-arrow material-symbols-outlined" aria-hidden>arrow_right</span>
              <span className="material-symbols-outlined" aria-hidden>folder_open</span>
              <span className="nav-label">Categories</span>
            </div>

            <div className="nav-item" role="button" tabIndex={0} onClick={() => setMoreOpen(!moreOpen)}>
              <span className="material-symbols-outlined" aria-hidden>{moreOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</span>
              <span className="nav-label">{moreOpen ? 'Less' : 'More'}</span>
            </div>

            {moreOpen && (
              <>
                <div className="nav-item" role="button" tabIndex={0}>
                  <span className="material-symbols-outlined" aria-hidden>label_important</span>
                  <span className="nav-label">Important</span>
                </div>
                <div className="nav-item" role="button" tabIndex={0}>
                  <span className="material-symbols-outlined" aria-hidden>schedule_send</span>
                  <span className="nav-label">Scheduled</span>
                </div>
                <div className="nav-item" role="button" tabIndex={0}>
                  <span className="material-symbols-outlined" aria-hidden>all_inbox</span>
                  <span className="nav-label">All Mail</span>
                </div>
                <div className="nav-item" role="button" tabIndex={0}>
                  <span className="material-symbols-outlined" aria-hidden>report</span>
                  <span className="nav-label" style={{ fontWeight: 700 }}>Spam</span>
                  <span className="nav-count" style={{ color: '#5f6368' }}>85</span>
                </div>
                <div className="nav-item" role="button" tabIndex={0}>
                  <span className="material-symbols-outlined" aria-hidden>delete</span>
                  <span className="nav-label">Trash</span>
                </div>
                <div className="nav-item" role="button" tabIndex={0}>
                  <span className="material-symbols-outlined" aria-hidden>group</span>
                  <span className="nav-label">Social</span>
                </div>
                <div className="nav-item" role="button" tabIndex={0}>
                  <span className="material-symbols-outlined" aria-hidden>info</span>
                  <span className="nav-label" style={{ fontWeight: 700 }}>Updates</span>
                  <span className="nav-count" style={{ color: '#5f6368' }}>5</span>
                </div>
                <div className="nav-item" role="button" tabIndex={0}>
                  <span className="material-symbols-outlined" aria-hidden>forum</span>
                  <span className="nav-label" style={{ fontWeight: 700 }}>Forums</span>
                  <span className="nav-count" style={{ color: '#5f6368' }}>6</span>
                </div>
                <div className="nav-item" role="button" tabIndex={0}>
                  <span className="material-symbols-outlined" aria-hidden>sell</span>
                  <span className="nav-label" style={{ fontWeight: 700 }}>Promotions</span>
                  <span className="nav-count" style={{ color: '#5f6368' }}>2</span>
                </div>
                <div className="nav-item" role="button" tabIndex={0}>
                  <span className="material-symbols-outlined" aria-hidden>settings</span>
                  <span className="nav-label">Manage labels</span>
                </div>
                <div className="nav-item" role="button" tabIndex={0}>
                  <span className="material-symbols-outlined" aria-hidden>add</span>
                  <span className="nav-label">Create new label</span>
                </div>
              </>
            )}
          </div>

          <div className="sidebar-divider" />

          {/* Labels section */}
          <div style={{ padding: '12px 0 0 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 24px 4px 24px' }}>
              <span style={{ fontSize: 14, fontWeight: 500, color: '#1f1f1f', lineHeight: '20px', letterSpacing: '.2px', fontFamily: "'Roboto', Arial, sans-serif" }}>Labels</span>
              <button type="button" style={{ background: 'none', border: 'none', padding: 4, cursor: 'pointer', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-symbols-outlined" aria-hidden style={{ fontSize: 20, color: '#444746' }}>add</span>
              </button>
            </div>

            <div className="nav-list" style={{ marginTop: 4 }}>
              <div className="nav-item" role="button" tabIndex={0}>
                <span className="material-symbols-outlined" aria-hidden style={{ fontSize: 20, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20", color: '#444746' }}>label</span>
                <span className="nav-label">[Gmail]Trash</span>
                <span className="nav-count" style={{ color: '#5f6368' }}>3</span>
              </div>

              <div className="nav-item" role="button" tabIndex={0}>
                <span className="material-symbols-outlined" aria-hidden style={{ fontSize: 20, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20", color: '#444746' }}>label</span>
                <span className="nav-label">Deleted Messages</span>
              </div>

              <div className="nav-item" role="button" tabIndex={0}>
                <span className="material-symbols-outlined" aria-hidden style={{ fontSize: 20, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20", color: '#444746' }}>label</span>
                <span className="nav-label">Navan</span>
              </div>

              <div className="nav-item" role="button" tabIndex={0}>
                <span className="material-symbols-outlined" aria-hidden style={{ fontSize: 20, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20", color: '#444746' }}>label</span>
                <span className="nav-label">Notes</span>
              </div>

              <div className="nav-item" role="button" tabIndex={0}>
                <span className="material-symbols-outlined" aria-hidden style={{ fontSize: 20, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20", color: '#444746' }}>label</span>
                <span className="nav-label">Sent Messages</span>
              </div>

              <div className="nav-item" role="button" tabIndex={0}>
                <span className="material-symbols-outlined" aria-hidden style={{ fontSize: 20, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20", color: '#444746' }}>label</span>
                <span className="nav-label">Support</span>
              </div>
            </div>
          </div>

        </aside>

        <div className="content">
          {/* INBOX VIEW */}
          <div
            id="inboxView"
            style={{ display: view === 'inbox' ? 'flex' : 'none' }}
          >
            <div className="inbox-toolbar">
              {/* Checkbox + dropdown */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                <input
                  type="checkbox"
                  checked={checkedIds.size > 0}
                  onChange={toggleAllChecked}
                  ref={(el) => { if (el) el.indeterminate = checkedIds.size > 0 && checkedIds.size < emails.length }}
                  style={{ width: 16, height: 16, cursor: 'pointer', accentColor: '#1a73e8' }}
                  aria-label="Select all"
                />
                <button className="tb-btn" type="button" aria-label="Select type" style={{ width: 20, height: 40 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }} aria-hidden>arrow_drop_down</span>
                </button>
              </div>

              {checkedIds.size > 0 ? (
                <>
                  <button className="tb-btn" type="button" aria-label="Archive">
                    <span className="material-symbols-outlined" aria-hidden>archive</span>
                  </button>
                  <button className="tb-btn" type="button" aria-label="Report spam">
                    <span className="material-symbols-outlined" aria-hidden>report</span>
                  </button>
                  <button className="tb-btn" type="button" aria-label="Delete">
                    <span className="material-symbols-outlined" aria-hidden>delete</span>
                  </button>
                  <div style={{ width: 1, height: 20, background: '#dadce0', margin: '0 4px' }} />
                  <button className="tb-btn" type="button" aria-label="Mark as read">
                    <span className="material-symbols-outlined" aria-hidden>drafts</span>
                  </button>
                  <button className="tb-btn" type="button" aria-label="Snooze">
                    <span className="material-symbols-outlined" aria-hidden>schedule</span>
                  </button>
                  <button className="tb-btn" type="button" aria-label="Add to tasks">
                    <span className="material-symbols-outlined" aria-hidden>add_task</span>
                  </button>
                  <div style={{ width: 1, height: 20, background: '#dadce0', margin: '0 4px' }} />
                  <button className="tb-btn" type="button" aria-label="Move to">
                    <span className="material-symbols-outlined" aria-hidden>drive_file_move</span>
                  </button>
                  <button className="tb-btn" type="button" aria-label="Labels">
                    <span className="material-symbols-outlined" aria-hidden>label</span>
                  </button>
                  <button className="tb-btn" type="button" aria-label="More">
                    <span className="material-symbols-outlined" aria-hidden>more_vert</span>
                  </button>
                </>
              ) : (
                <>
                  <button className="tb-btn" type="button" aria-label="Refresh">
                    <span className="material-symbols-outlined" aria-hidden>refresh</span>
                  </button>
                  <button className="tb-btn" type="button" aria-label="More">
                    <span className="material-symbols-outlined" aria-hidden>more_vert</span>
                  </button>
                </>
              )}

              <div className="tb-right">
                <span>1–50 of 843</span>
                <button className="pg-btn" type="button" aria-label="Prev page">
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }} aria-hidden>chevron_left</span>
                </button>
                <button className="pg-btn" type="button" aria-label="Next page">
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }} aria-hidden>chevron_right</span>
                </button>
              </div>
            </div>

            <div className="email-list" id="emailList">
              {emails.map((e) => (
                <div
                  key={e.id}
                  className={
                    'erow' +
                    (e.unread ? ' unread' : '') +
                    (checkedIds.has(e.id) ? ' checked-row' : '')
                  }
                  onClick={() => showEmail(e)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(ev) => {
                    if (ev.key === 'Enter' || ev.key === ' ') showEmail(e)
                  }}
                >
                  <input
                    type="checkbox"
                    checked={checkedIds.has(e.id)}
                    onClick={(evt) => toggleCheck(e.id, evt)}
                    readOnly
                    aria-label={`Select email: ${e.subject}`}
                  />
                  <span className="star">
                    {e.star ? <StarFilled /> : <StarEmpty />}
                  </span>
                  <span className="sender">{e.from}</span>
                  <span className="body">
                    <span className="subj">{e.subject}</span>
                    {e.preview ? <span className="prev"> - {e.preview}</span> : null}
                  </span>
                  {e.cal ? (
                    <span className="cal">
                      <CalendarIcon />
                    </span>
                  ) : null}
                  <span className="etime">{e.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* EMAIL VIEW */}
          <div
            id="emailView"
            style={{ display: view === 'email' ? 'flex' : 'none' }}
          >
            <div className="ev-toolbar">
              <button
                className="tb-btn"
                type="button"
                onClick={() => setView('inbox')}
                title="Back to Inbox"
              >
                <span className="material-symbols-outlined" aria-hidden>arrow_back</span>
              </button>

              <button className="tb-btn" type="button" aria-label="Archive">
                <span className="material-symbols-outlined" aria-hidden>archive</span>
              </button>
              <button className="tb-btn" type="button" aria-label="Report spam">
                <span className="material-symbols-outlined" aria-hidden>report</span>
              </button>
              <button className="tb-btn" type="button" aria-label="Delete">
                <span className="material-symbols-outlined" aria-hidden>delete</span>
              </button>
              <div style={{ width: 1, height: 20, background: '#dadce0', margin: '0 4px' }} />
              <button className="tb-btn" type="button" aria-label="Mark as read">
                <span className="material-symbols-outlined" aria-hidden>drafts</span>
              </button>
              <button className="tb-btn" type="button" aria-label="Snooze">
                <span className="material-symbols-outlined" aria-hidden>schedule</span>
              </button>
              <button className="tb-btn" type="button" aria-label="Add to tasks">
                <span className="material-symbols-outlined" aria-hidden>add_task</span>
              </button>
              <div style={{ width: 1, height: 20, background: '#dadce0', margin: '0 4px' }} />
              <button className="tb-btn" type="button" aria-label="Move to">
                <span className="material-symbols-outlined" aria-hidden>drive_file_move</span>
              </button>
              <button className="tb-btn" type="button" aria-label="Labels">
                <span className="material-symbols-outlined" aria-hidden>label</span>
              </button>
              <button className="tb-btn" type="button" aria-label="More">
                <span className="material-symbols-outlined" aria-hidden>more_vert</span>
              </button>

              <div className="tb-right">
                <span>1 of 843</span>
                <button className="pg-btn" type="button" aria-label="Newer">
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }} aria-hidden>chevron_left</span>
                </button>
                <button className="pg-btn" type="button" aria-label="Older">
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }} aria-hidden>chevron_right</span>
                </button>
              </div>
            </div>

            <div className="ev-subject-bar">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, minWidth: 0 }}>
                <span className="ev-subject" id="evSubject">
                  {selectedEmail?.subject ?? 'Email Subject'}
                </span>
                <span className="inbox-badge">
                  Inbox <span style={{ cursor: 'pointer', marginLeft: 4, fontSize: 11 }}>×</span>
                </span>
              </div>
              <div className="ev-subject-icons">
                <button className="ev-icon-btn" type="button" aria-label="Print">
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }} aria-hidden>print</span>
                </button>
                <button className="ev-icon-btn" type="button" aria-label="Open in new window">
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }} aria-hidden>open_in_new</span>
                </button>
              </div>
            </div>

            <div className="ev-from-bar">
              <div className="ev-from-left">
                <div className="ev-avatar">
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: 'rgba(0,0,0,0.3)', fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }} aria-hidden>account_circle</span>
                </div>
                <div className="ev-from-info">
                  <div className="ev-from-name-row">
                    <span className="ev-from-name" id="evFromName">
                      {selectedEmail?.from ?? 'Recipient Name'}
                    </span>
                    <span className="ev-from-email" id="evFromEmail">
                      {selectedEmail?.fromEmail
                        ? `<${selectedEmail.fromEmail}>`
                        : '<email@domain.com>'}
                    </span>
                    <span className="ev-unsub">Unsubscribe</span>
                  </div>
                  <div className="ev-to">
                    to <span style={{ fontWeight: 500 }}>me</span>
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: 'rgba(0,0,0,0.54)' }} aria-hidden>arrow_drop_down</span>
                  </div>
                </div>
              </div>

              <div className="ev-from-right">
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#5f6368', fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }} aria-hidden>attach_file</span>
                <div className="ev-timestamp">
                  <span>Thu, May 1, 9:00 AM</span>
                </div>
                <button className="ev-icon-btn" type="button" aria-label="Star">
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#dadce0', fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }} aria-hidden>star</span>
                </button>
                <button className="ev-icon-btn" type="button" aria-label="React">
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#5f6368', fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }} aria-hidden>sentiment_satisfied</span>
                </button>
                <button className="ev-icon-btn" type="button" aria-label="Reply">
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#5f6368', fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }} aria-hidden>reply</span>
                </button>
                <button className="ev-icon-btn" type="button" aria-label="More">
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#5f6368', fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }} aria-hidden>more_vert</span>
                </button>
              </div>
            </div>

            <div
              className="ev-body"
              id="evBody"
              style={{ padding: '24px 40px', background: '#f6f8fc' }}
            >
              <div
                style={{
                  maxWidth: 680,
                  margin: '0 auto',
                  background: '#fff',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: 15,
                  color: '#1a1a1a',
                  lineHeight: 1.6,
                }}
              >
                <div style={{ padding: '32px 32px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <rect width="40" height="40" rx="8" fill="#1B2A4A" />
                      <text
                        x="50%"
                        y="55%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontFamily="Arial,sans-serif"
                        fontSize="22"
                        fontWeight="900"
                        fill="#F5A623"
                      >
                        A
                      </text>
                    </svg>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        lineHeight: 1.1,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 18,
                          fontWeight: 800,
                          color: '#1B2A4A',
                          letterSpacing: 1.5,
                          textTransform: 'uppercase',
                          fontFamily: 'Arial,sans-serif',
                        }}
                      >
                        ACME
                      </span>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 500,
                          color: '#F5A623',
                          letterSpacing: 3,
                          textTransform: 'uppercase',
                          fontFamily: 'Arial,sans-serif',
                        }}
                      >
                        INCORPORATED
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '16px 32px 24px' }}>
                  <p style={{ margin: '0 0 12px' }}>Hi Sarah,</p>
                  <p style={{ margin: '0 0 12px' }}>
                    We're taking a look at how our team is adopting AI tools — what's working, where people feel confident, and where there's room to grow. Your input helps us get a clear picture of where we are as an organization.
                  </p>
                  <p style={{ margin: 0 }}>
                    This is a quick, friendly chat — not a test. Your answers go toward understanding our overall readiness, not evaluating you individually. Nothing is shared with your manager.
                  </p>
                </div>

                <div style={{ margin: '0 32px 24px', border: '1px solid #e0e0e0', borderRadius: 12, padding: 24 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>AI adoption assessment</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 20, fontSize: 14, color: '#444' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2L8 8H2l5 4-2 7 7-5 7 5-2-7 5-4h-6z" fill="#9C27B0" />
                      </svg>
                      John (AI Coach)
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v7h4c.55 0 1 .45 1 1s-.45 1-1 1h-5z" fill="#5f6368" />
                      </svg>
                      25 mins (estimated)
                    </span>
                  </div>
                  <p style={{ margin: '0 0 24px', fontSize: 14, color: '#333' }}>
                    This AI Coach interview will evaluate how you use AI tools to perform your work tasks through a series of questions.
                    Your responses will help us understand your current AI readiness and identify opportunities for skill development.
                  </p>
                  <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#b2ebf2', border: 'none', borderRadius: 20, padding: '10px 20px', fontSize: 14, fontWeight: 600, color: '#006064', cursor: 'pointer' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" fill="#006064" />
                      </svg>
                      Get started now
                    </button>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#fff', border: '1px solid #ccc', borderRadius: 20, padding: '10px 20px', fontSize: 14, color: '#333', cursor: 'pointer' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20 3h-1V1h-2v2H7V1H5v2H4C2.9 3 2 3.9 2 5v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" fill="#5f6368" />
                      </svg>
                      Add to calendar
                    </button>
                  </div>
                  <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 13, color: '#666' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#888" />
                      </svg>
                      Link expires 11:59 PM CDT May 15, 2026
                    </span>
                    <a href="#" style={{ color: '#1a73e8', textDecoration: 'none', fontWeight: 500 }}>
                      More options
                    </a>
                  </div>
                </div>

                <div style={{ margin: '0 32px 32px', border: '1px solid #e0e0e0', borderRadius: 12, padding: 24, display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>
                      Tips for a successful AI interview
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, color: '#333', marginBottom: 16 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#26C6DA" />
                        </svg>
                        Don't switch tabs during interview
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#26C6DA" />
                        </svg>
                        Allow camera and microphone access
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#26C6DA" />
                        </svg>
                        Choose a quiet location with no background movement
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#26C6DA" />
                        </svg>
                        Use headphones to reduce echo
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: '#555', margin: 0 }}>
                      For more information, read{' '}
                      <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>
                        frequently asked questions
                      </a>
                    </p>
                  </div>

                  <div
                    style={{
                      width: 170,
                      height: 128,
                      borderRadius: 8,
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={tipsThumbnail}
                      alt="Interview preview"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        display: 'block',
                      }}
                    />
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        background: 'rgba(255,255,255,0.85)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" fill="#333" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#1f2937', borderRadius: '0 0 8px 8px', padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#999', fontSize: 10 }}>
                    <span>Powered by</span>
                    <img src="/eightfold_logo_white.svg" alt="Eightfold.ai" style={{ height: 24 }} />
                  </div>
                  <a href="#" style={{ color: '#999', fontSize: 10, textDecoration: 'none' }}>
                    Eightfold privacy policy
                  </a>
                </div>
              </div>

              <div style={{ margin: '24px 0 0 40px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <button className="ev-action-btn" type="button">
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }} aria-hidden>reply</span>
                  Reply
                </button>
                <button className="ev-action-btn" type="button">
                  <span className="material-symbols-outlined" style={{ fontSize: 18, transform: 'scaleX(-1)' }} aria-hidden>reply</span>
                  Forward
                </button>
                <button className="ev-action-btn ev-action-btn--icon" type="button" aria-label="React">
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }} aria-hidden>sentiment_satisfied</span>
                </button>
                <button className="ev-action-btn" type="button">
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }} aria-hidden>chat_bubble_outline</span>
                  Share in chat
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="right-sidebar">
          <div
            className="rs-icon"
            style={{
              background: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            role="button"
            tabIndex={0}
            aria-label="Google Tasks"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                fill="#4285F4"
              />
            </svg>
          </div>

          <div
            className="rs-icon"
            style={{
              background: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            role="button"
            tabIndex={0}
            aria-label="Google Calendar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M20 3h-1V1h-2v2H7V1H5v2H4C2.9 3 2 3.9 2 5v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"
                fill="#EA4335"
              />
              <path
                d="M9 17H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8-4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"
                fill="#EA4335"
              />
            </svg>
          </div>

          <div
            className="rs-icon"
            style={{
              background: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            role="button"
            tabIndex={0}
            aria-label="Google Keep"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M9 21h6v-2H9v2zm3-19C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"
                fill="#FBBC05"
              />
            </svg>
          </div>

          <div
            className="rs-icon"
            style={{
              background: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            role="button"
            tabIndex={0}
            aria-label="Google Contacts"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                fill="#34A853"
              />
            </svg>
          </div>

          <div style={{ width: 20, height: 1, background: '#edeff1' }} />

          <div
            className="rs-icon"
            style={{
              background: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            role="button"
            tabIndex={0}
            aria-label="More apps"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#5f6368" />
            </svg>
          </div>

          <div className="rs-expand" role="button" tabIndex={0} aria-label="Expand">
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" fill="#5f6368" />
            </svg>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

