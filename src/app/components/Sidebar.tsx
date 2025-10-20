'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { faChartPie, faUsers, faListCheck, faCoins, faClipboardCheck, faCreditCard, faRightFromBracket, faU } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Sidebar() {
  const pathname = usePathname()

  const links = [
    { href: '/dashboard', label: 'Dashboard', icon: faChartPie },
    { href: '/clients', label: 'Clients', icon: faUsers },
    { href: '/tasks', label: 'Tasks', icon: faListCheck },
    { href: '/transactions', label: 'Transactions', icon: faCoins },
    { href: '/manual-verification', label: 'Manual Verification', icon: faClipboardCheck },
    { href: '/card-production', label: 'Card Production', icon: faCreditCard },
    { href: '/logout', label: 'Logout', icon: faRightFromBracket },
  ]

  return (
    <nav className="sidebar w-76 bg-brand flex flex-col fixed top-0 left-0 bottom-0 pt-24">
      {links.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? 'page' : undefined}
            className={`text-xl text-left px-8 py-4 flex items-center justify-left gap-5 border-l-5 border-transparent transition-all duration-300 ${
              isActive
                ? 'text-white border-white bg-white/10'
                : 'text-white/40 hover:text-white/70 hover:border-white/50 hover:bg-white/5'
            }`}
          >
            <FontAwesomeIcon className="text-center" icon={link.icon} size="xs"/>
            <span>{link.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
