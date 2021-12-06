const upcoming_events_section = document.getElementById('UPCOMING_EVENTS');
const statisic_1 = document.getElementById('statistic_1');
const statisic_2 = document.getElementById('statistic_2');
const statisic_3 = document.getElementById('statistic_3');
const upcoming_event_splotlight = document.getElementById('upcoming_event_splotlight');

const statistics_options = {
    root: null,
    threshold: 0.5,
}

//__________________________________________________________________
// OBSERVER :
const statistic_slide_down = new IntersectionObserver(function(entries, statistic_slide_down) {
    
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            statisic_1.style.transform = 'translateY(-100%)';
            statisic_2.style.transform = 'translateY(-200%)';
            statisic_3.style.transform = 'translateY(-300%)';
            upcoming_event_splotlight.style.transform = 'scaleX(0)';
            return;
        } else {
            statisic_1.style.transform = 'translateY(0)';
            upcoming_event_splotlight.style.transform = 'scaleX(1)';

            setTimeout(function() {
                statisic_2.style.transform = 'translateY(0)';
            }, 200)

            setTimeout(function() {
                statisic_3.style.transform = 'translateY(0)';
            }, 400)
            
        }
    })
}, statistics_options)

statistic_slide_down.observe(UPCOMING_EVENTS);


