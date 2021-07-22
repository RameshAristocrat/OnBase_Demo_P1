import { Component, OnInit } from '@angular/core';
import { animateText, onSideNavChange } from '../animation/animation';
import { SidenavService } from './sidenav.service';
interface Page {
  link: string;
  name: string;
  icon: string;
  type:string;
  header:string;
  submenu:SubPage[];
}
interface SubPage{
  link: string;
    name: string;
    icon: string;
    type:string;
    header:string;
}
@Component({
  selector: 'app-side-menu-bar',
  templateUrl: './side-menu-bar.component.html',
  styleUrls: ['./side-menu-bar.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class SideMenuBarComponent implements OnInit {
  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: Page[] = [
     {name: 'Manage PIN', link:'some-link', icon: 'lock',type:'P',header:'0',submenu:[
       //{
    //   name: 'Master', link:'/main/expinreq/pinrequest', icon: 'grade',type:'C',header:'0'
    // },
    {
      name: 'Studio', link:'/main/config/setuptable/studio/search', icon: 'admin_panel_settings',type:'SC',header:'0'
    },{
      name: 'Market', link:'/main/config/setuptable/market/search', icon: 'room_preferences',type:'SC',header:'0'
    },{
      name: 'Channel Type', link:'/main/config/setuptable/channeltype/search', icon: 'verified',type:'SC',header:'0'
    },{
      name: 'Channel', link:'/main/config/setuptable/channel/search', icon: 'thumb_up',type:'SC',header:'0'
    },{
      name: 'Cabinets', link:'/main/config/setuptable/cabinets/search', icon: 'event',type:'SC',header:'0'
    },{
      name: 'Dev Effort Type', link:'/main/config/setuptable/devefforttype/search', icon: 'lightbulb',type:'SC',header:'0'
    },{
      name: 'Dev Complexity', link:'/main/config/setuptable/devcomplexity/search', icon: 'highlight_off',type:'SC',header:'0'
    },{
      name: 'Gravity', link:'/main/config/setuptable/gravity/search', icon: 'task_alt',type:'SC',header:'0'
    },{
      name: 'Dev Type1', link:'/main/config/setuptable/devtype1/search', icon: 'question_answer',type:'SC',header:'0'
    },{
      name: 'Dev Type2', link:'/main/config/setuptable/devtype2/search', icon: 'room_preferences',type:'SC',header:'0'
    },{
      name: 'Dev Type2', link:'/main/config/setuptable/devtype2/search', icon: 'room_preferences',type:'SC',header:'0'
    },{
      name: 'Version', link:'/main/config/setuptable/version/search', icon: 'text_snippet',type:'SC',header:'0'
    },{
      name: 'Quarter', link:'/main/config/setuptable/quarter/search', icon: 'text_snippet',type:'SC',header:'0'
    },{
      name: 'EPP', link:'/main/config/setuptable/epp/search', icon: 'cloud',type:'SC',header:'0'
    },{
      name: 'Transaction', link:'/main/expinreq/pinrequest', icon: 'paid',type:'C',header:'0'
    }]},
    {name: 'Rework', link:'some-link', icon: 'all_inclusive',type:'P',header:'0',submenu:[{
      name: 'Master', link:'some-link', icon: 'work',type:'C',header:'0'
    },{
      name: 'Transaction', link:'some-link', icon: 'paid',type:'C',header:'0'
    }]},
    {name: 'Change Request', link:'some-link', icon: 'published_with_changes',type:'P',header:'0',submenu:[{
      name: 'Master', link:'some-link', icon: 'work',type:'C',header:'0'
    },{
      name: 'Transaction', link:'some-link', icon: 'paid',type:'C',header:'0'
    }]},
    {name: 'Delay Notification', link:'some-link', icon: 'circle_notifications',type:'P',header:'0',submenu:[{
      name: 'Master', link:'some-link', icon: 'work',type:'C',header:'0'
    },{
      name: 'Transaction', link:'some-link', icon: 'paid',type:'C',header:'0'
    }]},
    {name: 'Transfer Approval', link:'some-link', icon: 'receipt_long',type:'P',header:'0',submenu:[{
      name: 'Master', link:'some-link', icon: 'work',type:'C',header:'0'
    },{
      name: 'Transaction', link:'some-link', icon: 'paid',type:'C',header:'0'
    }]},
    {name: 'User Authorization', link:'some-link', icon: 'supervised_user_circle',type:'P',header:'0',submenu:[]},
    {name: 'Auditing ', link:'some-link', icon: 'admin_panel_settings',type:'P',header:'0',submenu:[]},
    {name: 'System Setup', link:'some-link', icon: 'phonelink_setup',type:'P',header:'0',submenu:[]},
    
  ]
  constructor(private _sidenavService: SidenavService) { }

  ngOnInit(): void {
  }
  onSinenavToggle() {
    console.log(this.sideNavState);
    this.sideNavState = true;
    
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }
  onSidenavToggleOver() {
    console.log(this.sideNavState);
    this.sideNavState = true;
    
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }
  onSidenavToggleOut() {
    console.log(this.sideNavState);
    this.sideNavState = !this.sideNavState
    
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}
