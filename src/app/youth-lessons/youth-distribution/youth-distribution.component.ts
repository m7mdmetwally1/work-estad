import { Component } from '@angular/core';

@Component({
  selector: 'app-youth-distribution',
  standalone: true,
  imports: [],
  templateUrl: './youth-distribution.component.html',
  styleUrl: './youth-distribution.component.css',
})
export class YouthDistributionComponent {
  names = [
    'بحر',
    'عبدالرحمن السيد',
    'دكتور خيرى',
    'يحيى',
    'عبدالكريم',
    'مختار',
    'احمدوليد',
  ];

  clicked(index: any) {
    const tabsContent = document.querySelectorAll('.background');

    tabsContent.forEach((item) => {
      if (!item.classList.contains('disable')) {
        item.classList.add('disable');
      }

      document.querySelector(`.content-${index}`)?.classList.remove('disable');
    });
  }

  //   const tabs = document.querySelectorAll('.operations__tab');
  // const tabsContainer = document.querySelector('.operations__tab-container');
  // const tabsContent = document.querySelectorAll('.operations__content');

  // tabsContainer.addEventListener('click', function (e) {
  //     const clicked = e.target.closest('.operations__tab');

  //     // Guard clause
  //     if (!clicked) return;

  //     // Remove active classes
  //     tabs.forEach(t => t.classList.remove('operations__tab--active'));
  //     tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //     // Activate tab
  //     clicked.classList.add('operations__tab--active');

  //     // Activate content area
  //     document
  //       .querySelector(`.operations__content--${clicked.dataset.tab}`)
  //       .classList.add('operations__content--active');
  //   });
}
