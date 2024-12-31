export interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
  }
  
  export const calculatePakistanTimeLeft = (): TimeLeft => {
    // Get current UTC time
    const now = new Date()
    
    // Create target date (January 1, 2025 00:00:00 Pakistan time)
    const targetDate = new Date('2025-01-01T00:00:00+05:00')
    
    // Convert target date to UTC milliseconds
    const targetUTC = targetDate.getTime()
    
    // Calculate difference
    const difference = targetUTC - now.getTime()
  
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
  
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }