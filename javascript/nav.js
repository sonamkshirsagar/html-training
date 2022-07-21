function subnavbar(sonam) {
    switch (sonam) {
        case 'bikes':
            if (document.getElementById(sonam).style.display = 'none') {
                document.getElementById(sonam).style.display = 'block';
            }
            else {
                document.getElementById(sonam).style.display = 'none';
            }

            break;
        case 'scooters':
            document.getElementById(sonam).style.display = 'block';
            break;
        case 'electriczone':
            document.getElementById(sonam).style.display = 'block';
            break;
        case 'bikefinance':
            document.getElementById(sonam).style.display = 'block';
            break;
        case 'usedbikes':
            document.getElementById(sonam).style.display = 'block';
            break;
        case 'salebikes':
            document.getElementById(sonam).style.display = 'block';
            break;
        case 'compare':
            document.getElementById(sonam).style.display = 'block';
            break;
        case 'newsandreviews':
            document.getElementById(sonam).style.display = 'block';
            break;
        case 'more':
            document.getElementById(sonam).style.display = 'block';
            break;

    }
}