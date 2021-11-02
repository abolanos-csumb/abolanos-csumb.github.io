// JavaScript Document
$(function () {
    $("map area").click(function () {
        if ($(this).attr("id") == "homePageMenuButton") {
            $("#feedback").css("color", "#E5A823");
            $("#feedback").css("fontSize", "20px");
            $("#feedback").html("<br /><p><strong>Home Menu Button</strong><br /><br />This menu button will provide you links to every area needed to navigate the main sections of the application. It includes links for the Home Page, Projects Page, Catalog Page, Workflows Page, Caontacts Page, Library Page. <br /><br /><img src=\"../lab6/img/HomeButton.png\" alt=\"Qualtrics Home Page Menu Button\" width=\"250\" align=\"center\"/><br /><br />");
        }

        if ($(this).attr("id") == "XMButton") {
            $("#feedback").css("color", "#E5A823");
            $("#feedback").css("fontSize", "20px");
            $("#feedback").html("<br /><p><strong>XM Home Button</strong><br /><br />The XM button will always return you to the Qualtrics Home Page.<br /><br /><img src=\"../lab6/img/XM_Logo.png\" alt=\"Qualtrics XM Button\" width=\"250\" align=\"center\"/><br /><br />");
        }

        if ($(this).attr("id") == "homePageAnalytics") {
            $("#feedback").css("color", "#E5A823");
            $("#feedback").css("fontSize", "20px");
            $("#feedback").html("<br /><p><strong>Home Page</strong><br /><br />The Qualtrics Homepage is the landing page when you first log into Qualtrics. This area will show what you have set up in the Customize Homepage settings area. You can turn on Active Surveys with response counts. There is also a Results link in each card to go to the response page for that partcular surve, as well as a quick timeline of the survey's activity. It can also display your workflow activity at the bottom of the page.  <br /><br /><img src=\"../lab6/img/Page_Analytics.png\" alt=\"Qualtrics Home Page Menu Button\" width=\"250\" align=\"center\"/><br /><br />");
        }

        if ($(this).attr("id") == "projectListSettings") {
            $("#feedback").css("color", "#E5A823");
            $("#feedback").css("fontSize", "20px");
            $("#feedback").html("<br /><p><strong>Customize Homepage Button (gear)</strong><br /><br />The Customize Homepage button will open the left side slider panel where you can customize the homepage, and change what is displayed. <br /><br /><img src=\"../lab6/img/Panel_CustomizeHomepage.png\" alt=\"Qualtrics Home Page Menu Button\" width=\"250\" align=\"center\"/><br /><br />");
        }
		
		if ($(this).attr("id") == "projectsList") {
            $("#feedback").css("color", "#E5A823");
            $("#feedback").css("fontSize", "20px");
            $("#feedback").html("<br /><p><strong>Recently Visited List</strong><br /><br />The Recently Visited area will list the latest Qualtrics projects that you opened up. It also has a link that will take you to the projects page. It will also show you if the prject is active, or you can click on the project menu button to close the project, as well as many other functions without having to go into the survey editor. <br /><br /><img src=\"../lab6/img/Panel_RecentProjectsList.png\" alt=\"Qualtrics Home Page Menu Button\" width=\"250\" align=\"center\"/><br /><br />");
        }
		
		if ($(this).attr("id") == "CreateNewProject") {
            $("#feedback").css("color", "#E5A823");
            $("#feedback").css("fontSize", "20px");
            $("#feedback").html("<br /><p><strong>Create a New Project Button</strong><br /><br />The Create a New Project button will open a newpage to start ceating a new Qualtric Survey. You will have the options to create a new survey from scratch, or use a survey from Qualtrics' large survey library. <br /><br /><img src=\"../lab6/img/Page_CreateProject.png\" alt=\"Qualtrics Create New Project Button\" width=\"450\" align=\"center\"/><br /><br />");
        }



        $("#feedback").css("backgroundColor", "#0055A2");
        $("#feedback").css("opacity", '1.0');
        $('#myModal').modal("show");

    });
}); //end main jQuery function