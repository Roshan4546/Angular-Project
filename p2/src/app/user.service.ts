import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private currentUser = new BehaviorSubject<any>(this.getUser());
    user$ = this.currentUser.asObservable();

    /** Returns true if there is a logged-in user, false otherwise */
    isLoggedIn(): boolean {
        // Check both Subject and localStorage (for robustness)
        return !!localStorage.getItem('user') || this.currentUser.value !== null;
    }

    /** On app start, update BehaviorSubject from storage if needed */
    checkPersistedUser() {
        const user = this.getUser();
        if (user) {
            this.currentUser.next(user);
        }
    }

    login(user: any) {
        this.currentUser.next(user);
        localStorage.setItem('user', JSON.stringify(user));
    }

    logout() {
        this.currentUser.next(null);
        localStorage.removeItem('user');
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user')!);
    }
}
