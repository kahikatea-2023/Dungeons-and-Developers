export interface OutcomeDraft {
  outcome: string
}

export interface Outcome extends OutcomeDraft {
  id: number
}

export interface Class {
  id: number
  className: string
}

export interface UserDraft {
  name: string
  classId: number
}

export interface User extends UserDraft {
  id: number
}

export interface Player {
  id: number
  name: string
  className: string

}

